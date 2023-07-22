const express = require("express");
const { con } = require("../Config/db");
const loginRouter = express.Router();
const bcrypt = require("bcrypt");
loginRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  const CheckQuery =
    "SELECT * FROM UserRegistrationDetails WHERE email=? AND password=?";

  con.query(CheckQuery, [email, password], async (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (result.length > 0) {
        const hashPassword = result[0].password;

        try {
          await bcrypt.compare(password, hashPassword, function (err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send("User Login Success");
            }
          });
        } catch (err) {
          res.send(err);
        }
      } else {
        res.send("User Login Failed");
      }
    }
  });
});
// });
module.exports = { loginRouter };
