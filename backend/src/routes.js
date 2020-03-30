const express = require("express");

const routes = new express.Router();

routes.post("/", (req, res) => {
  return res.send(`Olá ${req.query.name}`);
});

module.exports = routes;
