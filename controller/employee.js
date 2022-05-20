const router = require("express").Router();
const { Employee } = require("../models/employee");

// get All Employees
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.status(200).send({ employees });
});

//save employee
router.post("/", async (req, res) => {
  const { name, email, salary } = req.body;
  const _emp = new Employee({
    email,
    name,
    salary,
  });
  await _emp.save();
  res.status(200).send({ _emp });
});

//get by id
router.get("/:id", async (req, res) => {
  const employeebyid = await Employee.findById(req.params.id, (req, res) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
    res.status(200).send({ employeebyid });
  });
});

//update employee

router.put("/edit/:id", async (req, res) => {
  const emo = {
    name: req.body.name,
    email: req.body.email,
    salary: req.body.salary,
  };
  const updateemployee = Employee.findByIdAndUpdate(
    req.params.id,
    { $set: emp },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "Employee Updated Successfully",
          updateEmployee: data,
        });
      } else {
        console.log(err);
      }
      res.status(200).send({ updateemployee });
    }
  );
});

//Delete Employee
router.delete("/:id", (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (req, res) => {
    if (!err) {
      res
        .status(200)
        .json({
          code: 200,
          message: "Employee Deleted Successfully.",
          deleteEmployee: data,
        });
    }
  });
});
module.exports = router;
