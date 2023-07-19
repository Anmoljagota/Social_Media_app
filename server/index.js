const { con } = require("./Config/db");
const express = require("express");
const cors = require("cors");
const { RegsiterRoute } = require("./Routes/RegisterRoute");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", RegsiterRoute);
app.listen(process.env.port, async () => {
  try {
    await con;
    console.log(`server is running on port ${process.env.port}`);
  } catch {
    console.log(`some error ${err}`);
  }
});
