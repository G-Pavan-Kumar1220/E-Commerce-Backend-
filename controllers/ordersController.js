const OrderModel = require("../models/orders");
const User = require("../models/userModel");

// CREATE ORDER
const createOrder = async (req, res) => {
  try {
    const {
      userId,
      customerDetails,
      paymentMethod,
      products,
      billDetails,
    } = req.body;

    // VALIDATION
    if (
      !userId ||
      !customerDetails ||
      !paymentMethod ||
      !products ||
      products.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // FORMAT PRODUCTS
    const formattedProducts = products.map((item) => ({
      productId: item.productId?._id,
      name: item.productId?.name,
      image: item.productId?.image,
      price: item.productId?.price,
      quantity: item.quantity,
      totalPrice:
        item.productId?.price * item.quantity,
    }));

    // CREATE ORDER
    const newOrder = await OrderModel.create({
      userId,
      customerDetails,
      paymentMethod,
      products: formattedProducts,
      billDetails,
      orderStatus: "Pending",
      paymentStatus:
        paymentMethod === "COD"
          ? "Pending"
          : "Paid",
    });

    // CLEAR USER CART
    await User.findByIdAndUpdate(userId, {
      cart: [],
    });

    // RESPONSE
    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });

  } catch (error) {
    console.log("CREATE ORDER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// GET USER ORDERS
const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    // VALIDATION
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    // FETCH ORDERS
    const orders = await OrderModel.find({
      userId,
    }).sort({ createdAt: -1 });

    // RESPONSE
    return res.status(200).json({
      success: true,
      totalOrders: orders.length,
      orders,
    });

  } catch (error) {
    console.log("GET USER ORDERS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};


// GET CART COUNT
const getCartCount = async (req, res) => {
  try {
    const { userId } = req.params;

    // CHECK USER ID
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    // FIND USER
    const user = await User.findById(userId);

    // USER NOT FOUND
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // TOTAL PRODUCTS COUNT
    const cartCount = user.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    return res.status(200).json({
      success: true,
      cartCount,
    });

  } catch (error) {
    console.log("GET CART COUNT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch cart count",
      error: error.message,
    });
  }
};

module.exports = {
  getCartCount,
  createOrder,
  getUserOrders,
};