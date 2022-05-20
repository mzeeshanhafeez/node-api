const express = require("express");
const { route } = require("express/lib/application");
const Router = require("router");
const router = express.Router();

const { Employee } = require("../model/employee");

router.get("./api/employees", (req, res) => {
  Employee.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

router.post("api/employee/add", (req, res) => {
  const emp = new Employee({
    name: req.body.name,
    email: req.body.email,
    salary: req.body.salary,
  });
  emp.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "Employee Added Successfully",
      addEmployee: data,
    });
  });
});

router.get("/api/employee/:id", (req, res) => {
  Employee.findById(req.params.id, (req, res) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
