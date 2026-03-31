require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5004;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Service running on port ${PORT}`);
  });
}

startServer();