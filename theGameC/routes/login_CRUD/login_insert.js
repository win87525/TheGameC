const express = require("express");
const page = express.Router();

var config = require('../CRUD/config');

var bodyParser = require('body-parser');
page.use(bodyParser.urlencoded());


//接收form表單的資料 並丟進到資料庫
page.post('/signin', function (req, res) {
    var sql = "INSERT INTO users (user_id, username, password, email, phone, birthday) VALUES (?,?,?,?,?,?);"
    //這個sql是sql語言寫的，?是代表我上面:要輸入的值將被填入到?中
    const user_id = req.body.user_id;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;
    const birthday = req.body.birthday;
    
    config.query(sql, [user_id, username, password, email, phone, birthday],
         function (err, results, fields) {
        // console.log(username);

        if (err) {
            console.log("Error:", err);
            res.send("Error occurred during inserting recharge data!");
          } else {
            console.log("Insert recharge data successfully:", results);
            res.send(results);
          }
        // console.log(results[0].phone);
        // console.log(err.sql);
        // console.log(fields);
    })
    // res.render("login");
    // res.send(username + '註冊成功');
    // res.redirect('/login')
    //   alert('註冊成功')
    // config.end();
})

module.exports = page;