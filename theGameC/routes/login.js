const express = require("express");
const page = express.Router();
const path = require("path");

page.get("/login", (req, res) => {
  res.render("login");
});

module.exports = page;
