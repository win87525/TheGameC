const express = require("express");
const page = express.Router();

var config = require('../CRUD/config');
const nodemailer = require('nodemailer');

//引用 nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'win87525@gmail.com',
        pass: 'ecadlswbavvoalda'
    }
});

page.post('/aaa', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 10000); // 生成0-9999之間的整數
    // console.log(randomNumber);
    const mailOptions = {
        from: 'win87525@gmail.com',
        to: 'win87525@yahoo.com.tw',
        subject: 'ThegameC密碼更動',
        text: `${randomNumber}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            console.log(`${randomNumber}`);
            res.send(`${randomNumber}`);
        }
    });
});
module.exports = page;