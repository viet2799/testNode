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
  console.log(query);
  const { pageSize = 10, page = 1, name } = query;
  const skip = (parseInt(page) - 1) * parseInt(pageSize);
  const result = await Customer.find({
    name: { $regex: ".*" + name + ".*" },
  })
    .skip(skip)
    .limit(pageSize)
    .exec();
  return result;
};

module.exports = {
  addCustomerService,
  addManyCustomerService,
  getAllCustomersService,
};
