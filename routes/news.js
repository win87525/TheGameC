const express = require("express");
const page = express.Router();
const path = require("path");

page.get("/latest", (req, res) => {
  res.render("news");
});

page.get("/games_updates", (req, res) => {
  res.render("news");
});

page.get("/products_promotions", (req, res) => {
  res.render("news");
});

page.get("/new_products", (req, res) => {
  res.render("news");
});

module.exports = page;
