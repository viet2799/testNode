const {
  addCustomerService,
  addManyCustomerService,
  getAllCustomersService,
} = require("../services/CustomerService");
const {
  handleUploadSingleFileName,
  uploadFileExcel,
} = require("../services/UploadFileService");
const xlsx = require("xlsx");

const addCustomer = async (req, res) => {
  const {
    name = "",
    email = "",
    phone = "",
    address = "",
    dob = "",
    description = "",
  } = req.body;
  const file = req.files?.image;

  try {
    const imageUrl = await handleUploadSingleFileName(file);

    const customerPayload = {
      name,
      email,
      phone,
      address,
      dob,
      description,
      image: imageUrl.path,
    };

    const result = await addCustomerService(customerPayload);

    return res.status(200).json({
      EC: 0,
      data: result,
      urlImage: imageUrl,
    });
  } catch (error) {
    return res.send({
      EC: 1,
      message: "Error",
      error: JSON.stringify(error),
    });
  }
};

const addManyCustomer = async (req, res) => {
  try {
    const result = await addManyCustomerService(req.body?.customers);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      EC: 1,
      message: "Error",
      error: JSON.stringify(error),
    });
  }
};

const uploadManyCustomers = async (req, res) => {
  try {
    const results = await uploadFileExcel(req.files?.files);
    const resultuploadFile = await addManyCustomerService(results);
    res.send({
      EC: 0,
      data: resultuploadFile,
    });
  } catch (error) {
    res.send({
      EC: 1,
      message: "Error",
      error: JSON.stringify(error),
    });
  }
};

const getAllCustomers = async (req, res) => {
  console.log("req", req.query);
  const query = req.query;
  try {
    const result = await getAllCustomersService(query);
    res.status(200).json({
      EC: 0,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      EC: 1,
      message: "looxi rooi",
      error: JSON.stringify(error),
    });
  }
};

module.exports = {
  addCustomer,
  addManyCustomer,
  uploadManyCustomers,
  getAllCustomers,
};
