const SERVICE_DOCS = [
  { name: "User Service", url: process.env.USER_SERVICE_URL },
  { name: "Camera Service", url: process.env.CAMERA_SERVICE_URL },
  { name: "Booking Service", url: process.env.BOOKING_SERVICE_URL },
  { name: "Employee Service", url: process.env.EMPLOYEE_SERVICE_URL }
];

const cloneObject = (value) => JSON.parse(JSON.stringify(value || {}));

const mergeUniqueByName = (target, source) => {
  const existingNames = new Set(target.map((item) => item.name));

  source.forEach((item) => {
    if (!item || !item.name || existingNames.has(item.name)) {
      return;
    }

    target.push(item);
    existingNames.add(item.name);
  });
};

const fetchServiceSwagger = async (service) => {
  if (!service.url) {
    return null;
  }

  const response = await fetch(`${service.url}/api-docs-json`);

  if (!response.ok) {
    throw new Error(`${service.name} Swagger fetch failed with status ${response.status}`);
  }

  return response.json();
};

const getServiceSwaggerSpecs = async () => {
  const results = await Promise.allSettled(
    SERVICE_DOCS.map((service) => fetchServiceSwagger(service))
  );

  return results
    .filter((result) => result.status === "fulfilled" && result.value)
    .map((result) => result.value);
};

const mergeComponents = (target, source) => {
  Object.keys(source || {}).forEach((componentType) => {
    if (!target[componentType]) {
      target[componentType] = {};
    }

    Object.assign(target[componentType], cloneObject(source[componentType]));
  });
};

const buildGatewaySwaggerSpec = async (gatewayUrl) => {
  const serviceSpecs = await getServiceSwaggerSpecs();

  const mergedSpec = {
    openapi: "3.0.0",
    info: {
      title: "Camera Booking Platform API",
      version: "1.0.0",
      description: "Unified API documentation exposed through API Gateway"
    },
    servers: [
      {
        url: gatewayUrl
      }
    ],
    tags: [],
    paths: {},
    components: {}
  };

  serviceSpecs.forEach((spec) => {
    mergeUniqueByName(mergedSpec.tags, cloneObject(spec.tags || []));

    Object.assign(mergedSpec.paths, cloneObject(spec.paths));

    mergeComponents(mergedSpec.components, spec.components);
  });

  return mergedSpec;
};

module.exports = {
  buildGatewaySwaggerSpec
};
