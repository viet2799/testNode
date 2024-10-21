require("dotenv").config();
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/web");
const apiRoutes = require("./src/routes/api");
const { connection } = require("./src/config/database");
const fileUpload = require("express-fileupload");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;
configViewEngine(app);

app.use(fileUpload());
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

(async () => {
  try {
    // await connection();
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;

    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
