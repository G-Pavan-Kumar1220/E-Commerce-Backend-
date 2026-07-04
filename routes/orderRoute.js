const express = require("express");

const {
  createOrder,
  getUserOrders,
  getCartCount,
} = require("../controllers/ordersController");

const orderRouter = express.Router();

// CREATE ORDER
orderRouter.post("/create", createOrder);

// GET USER ORDERS
orderRouter.get("/user/:userId", getUserOrders);

orderRouter.get("/count/:userId", getCartCount);

module.exports = orderRouter;

