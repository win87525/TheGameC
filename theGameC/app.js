// 如果有要更改或新增東西，照下面分類放

/*--- module ---*/
const express = require("express");
const app = express();
const cors = require("cors"); // 允許不同網域請求
const bodyParser = require("body-parser"); // 允許不同網域請求

/* 設定 port 90 可連近來 */
const setting = {
  origin: ["http://localhost:90"],
  // 設定此人可以進來，url 尾端不要有斜線
};
app.use(cors(setting));

// session設定
var session = require("express-session");
app.use(
  session({
    secret: "appelpsdogd",
    resave: true,
    saveUninitialized: true,

    cookie: {
      path: "/",
      httpOnly: true,
      secure: false,
      maxAge: 100 * 1000,
    },
  })
);

/*--- 導入網頁路由 ---*/
const indexPage = require("./routes/index"); // 首頁
const loginPage = require("./routes/login"); // 登入頁
const gamePage = require("./routes/games"); // 遊戲大頁
const walletPage = require("./routes/wallet"); // 錢包頁
const newsPage = require("./routes/news"); // 新聞頁
const shoppingCartPage = require("./routes/products"); // 購物車頁

/*--- 導入 CRUD for 全體 路由 ---*/
// 這與專屬某網頁的CRUD不同，這裡主要放給全體路由都能做使用的CRUD
// 例如：SELECT users，這種的 table 是很多路由都有可能用到的
// 就直接在這設給大家用，以免不同網頁就要製作一個
const selectForAll = require("./routes/CRUD/select");

/*--- 中介 ---*/
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*--- 設定路由 ---*/
app.use("/", indexPage);
app.use("/wallet/", walletPage);
app.use("/news/", newsPage);
app.use("/products/", shoppingCartPage);
app.use("/login", loginPage);
app.use("/games", gamePage);

/*--- CRUD for All 路由 ---*/
// ex. 想看 user6 的資料就是
// http://localhost/user/user6
// 原因看向 routes/CRUD/select.js
app.use("/", selectForAll);

/*--- 網頁 404 ---*/
app.get("*", (req, res) => {
  res.render("404");
});

/*--- 伺服器 ---*/
app.listen(80, () => {
  console.log("【伺服器 port 80 啟動 - 代理商 TheGameC】");
  console.log("【Ctrl + C 可關閉伺服器】");
});
