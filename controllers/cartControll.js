const User = require("../models/userModel");

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);

    const itemIndex = user.cart.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      user.cart[itemIndex].quantity += 1;
    } else {
      user.cart.push({ productId, quantity: 1 });
    }

    await user.save();

    res.status(200).json({ cart: user.cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET CART
const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate("cart.productId");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.cart || []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// REMOVE FROM CART
const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);

    user.cart = user.cart.filter(
      (item) => item.productId.toString() !== productId
    );

    await user.save();

    res.status(200).json({ cart: user.cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE QUANTITY
const updateCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const user = await User.findById(userId);

    const item = user.cart.find(
      (item) => item.productId.toString() === productId
    );

    if (item) {
      item.quantity = quantity;
    }

    await user.save();

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  updateCart,
};