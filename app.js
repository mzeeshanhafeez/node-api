const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
require("./config/db").connectDB();
// require("./routes/index").route();
const employeeRouter = require("./controller/employee");
app.use("/employee", employeeRouter);

// app.use("/", require("./routes/index"));

app.listen(process.env.PORT || 4000, () => {
  console.log("server is listening at port ", port);
});

// app.use("/employee", employeeController);
