const { default: mongoose } = require("mongoose");

const accountsSchema = new mongoose.Schema({
  name: String,
  userName: String,
  password: String,
});

const Account = mongoose.model("Accounts", accountsSchema);

module.exports = Account;
