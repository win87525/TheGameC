const express = require("express");
const page = express.Router();

const config = require("../CRUD/config"); // 引用 config

/* 會員資料 */
page.get("/recharge_data/:id", (req, res) => {
  var sql =
    "SELECT * ,DATE_FORMAT(recharge_date, '%Y-%m-%d') AS Rdate FROM c_coin_recharge WHERE user_id = ?;";
  config.query(
    sql,
    [req.params.id], // 名稱照 /: 打
    function (err, results, fields) {
      console.log(results[0]);
      res.send(JSON.stringify(results[0]));
    }
  );
});



module.exports = page;
