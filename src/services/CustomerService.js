const Customer = require("../models/Customer");

const addCustomerService = async (customer) => {
  const result = await Customer.create(customer);
  return result;
};

const addManyCustomerService = async (customers) => {
  if (customers.length > 0) {
    try {
      const result = await Customer.insertMany(customers);
      return result;
    } catch (error) {
      return error;
    }
  } else {
    return "No data to insert";
  }
};

const getAllCustomersService = async (query) => {
  const result = await Customer.find({});
  return result;
};

module.exports = {
  addCustomerService,
  addManyCustomerService,
  getAllCustomersService,
};
