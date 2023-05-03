const express = require("express");
const page = express.Router();

const config = require("../CRUD/config"); // 引用 config

//////////////
/* recharge */
//////////////
page.post("/insertRecharge/:user_id", (req, res) => {
  var sql =
    "INSERT INTO c_coin_recharge (user_id, consume, c_coin_get, c_coin_balance, pay_method, credit_account, paypal_account, gash_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
  config.query(
    sql,
    [
      req.params.user_id,
      req.body.consume,
      req.body.c_coin_get,
      req.body.c_coin_balance,
      req.body.pay_method,
      req.body.credit_account,
      req.body.paypal_account,
      req.body.gash_number,
    ],
    function (err, results, fields) {
      if (err) {
        console.log("Error:", err);
        res.send("Error occurred during inserting recharge data!");
      } else {
        console.log("Insert recharge data successfully:", results);
        res.send(results);
      }
    }
  );

  console.log("req.body: ", req.body);
  console.log("req.params.user_id: ", req.params);
});

module.exports = page;
