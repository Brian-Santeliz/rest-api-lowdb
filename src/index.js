const express = require("express");
const morgan = require("morgan")
const router = require('./routes')
const { connection } = require('./database')
const app = express();

//settings
app.set("port", 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

//router
app.use(router)

//listening
connection()
app.listen(app.get("port"), () =>
  console.log(`Server on port ${app.get("port")}`)
);
