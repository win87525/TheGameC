const express = require("express");
const page = express.Router();

const config = require("../CRUD/config"); // 引用 config

// PI dialog 編輯
page.put("/updatePI/:user_id", (req, res) => {
  var sql = "UPDATE users SET phone = ?, nickname = ? WHERE user_id = ?";
  config.query(
    sql,
    [req.body.phone, req.body.nickname, req.params.user_id],
    function (err, results, fields) {
      console.log(results);
      res.send(results);
    }
  );
  console.log("req.body: ", req.body);
  console.log("req.params.user_id: ", req.params.user_id);
});

module.exports = page;