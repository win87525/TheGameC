const express = require("express");
const app = express();
const cors = require("cors"); // 允許不同網域請求

// 導入路由
const indexPage = require("./routes/index");
const loginPage = require("./routes/login");
const gamePage = require("./routes/games");
const walletPage = require("./routes/wallet");
const newsPage = require("./routes/news");
const shoppingCartPage = require("./routes/products");

// 中介
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 伺服器
app.listen(80, () => {
  console.log("【伺服器 port 80 啟動】");
  console.log("【Ctrl + C 可關閉伺服器】");
});

// 設定路由
app.use("/", indexPage);
app.use("/wallet/", walletPage);
app.use("/news/", newsPage);
app.use("/products/", shoppingCartPage);
app.use("/", loginPage);
app.use("/", gamePage);

// 網頁 404
app.get("*", (req, res) => {
  res.render("404");
});
