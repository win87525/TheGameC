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
  page.get("/getUsername", (req, res) => {
    var sql = "SELECT username, password FROM users";
    config.query(sql, function (err, results, fields) {
      if (err) throw err;
      var usernamesAndPasswords = [];
      for (var i = 0; i < results.length; i++) {
        usernamesAndPasswords.push({ username: results[i].username, password: results[i].password });
      }
      console.log(usernamesAndPasswords);
      res.send(JSON.stringify(usernamesAndPasswords));
    });
  });
  module.exports = page;
