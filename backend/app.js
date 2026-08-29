require("dotenv").config();

const express = require("express");

const app = express();

const PaymentRoutes = require("../backend/router/payment.routes");

app.use(express.json());

app.use(express.static("frontend"));

app.use("/api/payment", PaymentRoutes);

console.log("hello user");

module.exports = app;