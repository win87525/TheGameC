const express = require("express");
const page = express.Router();
const axios = require("axios");

const wallet_select = require("./wallet_CRUD/select");
const wallet_update = require("./wallet_CRUD/update");

// PI 頁面
page.get("/PI/:id", async (req, res) => {
  let usersSelect = await axios.get(
    `http://localhost:80/wallet/user/${req.params.id}`
  );

  res.render("wallet_PI", {
    title: "My Wallet",
    currentRoute: "Route_PI",
    userData: usersSelect.data,
  });
});

// 儲值頁面
page.get("/recharge/:id", async (req, res) => {
  let usersSelect = await axios.get(
    `http://localhost:80/wallet/user/${req.params.id}`
  );

  res.render("wallet_recharge", {
    title: "My Wallet",
    currentRoute: "Route_recharge",
    userData: usersSelect.data,
  });
});

// 轉點頁面
page.get("/exchange/:id", async (req, res) => {
  let usersSelect = await axios.get(
    `http://localhost:80/wallet/user/${req.params.id}`
  );

  res.render("wallet_exchange", {
    title: "My Wallet",
    currentRoute: "Route_exchange",
    userData: usersSelect.data,
  });
});

page.use("/", wallet_select);
page.use("/", wallet_update);

module.exports = page;
