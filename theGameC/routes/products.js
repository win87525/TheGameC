const express = require("express");
const page = express.Router();
const path = require("path");

page.get("/shopping_cart", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/shopping_cart.html"));
});

module.exports = page;
