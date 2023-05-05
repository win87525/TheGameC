const express = require("express");
const page = express.Router();
const axios = require("axios");

const wallet_select = require("./CRUD/select");
const wallet_CRUD_update = require("./wallet_CRUD/w_update");
const wallet_CRUD_post = require("./wallet_CRUD/w_post");
const wallet_CRUD_select = require("./wallet_CRUD/w_select"); // /wallet/recharge_data/5

/* PI 頁面 */
page.get(`/PI/:id`, async (req, res) => {
  // 用戶資料
  let usersSelect = await axios.get(
    `http://localhost:80/user/${req.params.id}`  //這邊的http://localhost:80/user路徑要找到CRUD的select.js看他的get命名
  );
  // 儲值紀錄
  let coinRecharge_data = await axios.get(
    `http://localhost:80/wallet/recharge_data/${req.params.id}`  //這邊的http://localhost:80/wallet/recharge_data路徑要找到wallet_CRUD的w_select.js看他的get命名
  );

  res.render("wallet_PI", {  //渲染到ejs
    title: "My Wallet",
    currentRoute: "Route_PI",
    userData: usersSelect.data,   //取得值 然後到ejs裡面用<%代入>
    userRechargeData: coinRecharge_data.data,
  });
  // console.log(coinRecharge_data.data);
});

/* 儲值頁面 */
page.get("/recharge/:id", async (req, res) => {
  let usersSelect = await axios.get(
    `http://localhost:80/user/${req.params.id}`
  );

  res.render("wallet_recharge", {
    title: "My Wallet",
    currentRoute: "Route_recharge",
    userData: usersSelect.data,
  });
});

/* 轉點頁面 */
page.get("/exchange/:id", async (req, res) => {
  let usersSelect = await axios.get(
    `http://localhost:80/user/${req.params.id}`   
  );

  const user_id = usersSelect.data.user_id;
  console.log("我是：", user_id, "結束");

  let userGames = await axios.get(
    `http://localhost:80/user_games/${req.params.id}`
  );

  var GameData = { ...userGames.data };
  GameData.games = userGames.data.games.split(",");
  GameData.images = userGames.data.images.split(",");
  // console.log(GameData);

  res.render("wallet_exchange", {
    title: "My Wallet",
    currentRoute: "Route_exchange",
    userData: usersSelect.data,
    userGame: GameData,
  });
});

// 綁定為 http://localhost/wallet/...
// 主要用於 wallet_CRUD
page.use("/", wallet_CRUD_update);
page.use("/", wallet_CRUD_select);
page.use("/", wallet_CRUD_post);

module.exports = page;
