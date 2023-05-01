const express = require("express");
const page = express.Router();

const config = require("./config"); // 引用 config

page.get("/user/:id", (req, res) => {
  var sql =
    "SELECT *, DATE_FORMAT(birthday, '%Y-%m-%d') AS birthday FROM users WHERE user_id = ?;";
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
