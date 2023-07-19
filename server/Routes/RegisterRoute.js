const express = require("express");
const RegsiterRoute = express.Router();
const { con } = require("../Config/db");
RegsiterRoute.post("/register", (req, res) => {
  console.log("i am req.body", req.body);
  //   try {
   con.query(
    "INSERT INTO UserRegistrationDetails SET ?",
    req.body,
    (err, result, fields) => {
      if (err) {
        res.send(err);
      } else {
        res.send("user register succesfully");
      }
    }
  );
  //   } catch {
//   res.send("something wrong while user registration");
  //   }
});
module.exports = { RegsiterRoute };
