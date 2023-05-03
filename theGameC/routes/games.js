const express = require("express");
const page = express.Router();
const path = require("path");

page.get("/games", (req, res) => {
  res.render("games");
});

module.exports = page;
