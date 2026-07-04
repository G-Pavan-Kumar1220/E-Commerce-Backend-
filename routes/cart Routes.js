const express = require('express');
const { addToCart, getCart, removeFromCart, updateCart } = require('../controllers/cartControll');
const { verify } = require('jsonwebtoken');

const cartRoutes = express.Router()


cartRoutes.post("/add", addToCart);
cartRoutes.get("/:userId",verify, getCart);
cartRoutes.delete("/remove", removeFromCart);
cartRoutes.put("/update", updateCart);

module.exports=cartRoutes