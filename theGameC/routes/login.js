const express = require("express");
const page = express.Router();
const path = require("path");

var mysql = require('./CRUD/config');

var bodyParser = require('body-parser');
page.use(bodyParser.urlencoded());

page.get("/login", (req, res) => {
  res.render("login");
});

//接收form表單的資料 並丟進到資料庫
page.post('/signin', function (req, res) {
  //這個sql是sql語言寫的，?是代表我上面:要輸入的值將被填入到?中
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const phone = req.body.phone;
  const birthday = req.body.birthday;
  var sql = "INSERT INTO users (username, password, email, phone, birthday) VALUES (?,?,?,?,?);"
  mysql.query(sql, [username, password, email, phone, birthday], function (err, results, fields) {
    console.log(username);
  })
  // res.send(username + '註冊成功');
  alert('註冊成功')
})
module.exports = page;
