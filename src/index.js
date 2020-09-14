const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const { conexion } = require("./database");
const app = express();

app.set("port", 3000);

app.use(express.json());
app.use(morgan("dev"));

app.use("/propiedades", router);

conexion();
app.listen(app.get("port"), () =>
  console.log(`Server on port ${app.get("port")}`)
);
