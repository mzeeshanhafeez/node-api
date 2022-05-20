const mongoose = require("mongoose");

const Employee = mongoose.model("employees", {
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  salary: {
    type: String,
    required: true,
  },
});

module.exports = { Employee };
