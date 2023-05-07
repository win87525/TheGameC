const express = require("express");
const page = express.Router();

var config = require('../CRUD/config');


/* 會員資料 */
page.get("/last_id", (req, res) => {
  var sql =
    "SELECT user_id FROM users ORDER BY user_id DESC LIMIT 1;";
  config.query(
    sql,
    // 名稱照 /: 打
    function (err, results, fields) {
      console.log(results[0]);
      res.send(JSON.stringify(results[0]));
    }
  );
});


module.exports = page;
