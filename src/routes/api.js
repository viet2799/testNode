const express = require("express");
const routes = express.Router();
const {
  getAllUsers,
  addUser,
  editUser,
  deleteUser,
  UploadSingleFile,
  UploadMultipleFile,
} = require("../controllers/apiController");
const { addCustomer, addManyCustomer, uploadManyCustomers, getAllCustomers } = require("../controllers/customerController");

//users
routes.get("/users", getAllUsers);
routes.post("/user", addUser);
routes.put("/user", editUser);
routes.delete("/user", deleteUser);

//customers
routes.post("/upload-file", UploadSingleFile);
routes.post("/upload-files", UploadMultipleFile);
routes.post("/customer", addCustomer);
routes.post("/many-customers", addManyCustomer);
routes.post("/upload-file-customers", uploadManyCustomers);
routes.get("/customers", getAllCustomers);

module.exports = routes;
