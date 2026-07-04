const Product = require("../models/products");

const getSpecificProducts = async (
  req,
  res
) => {
  try {
    const { category } = req.query;

    // CHECK CATEGORY
    if (!category) {
      return res.status(400).json({
        success: false,
        message:
          "Category query param is required",
      });
    }

    // CLEAN CATEGORY
    const cleanCategory =
      category.trim();

    // FIND PRODUCTS
    const products =
      await Product.find({
        productCategory: {
          $regex: `^${cleanCategory}$`,
          $options: "i",
        },
      });

    // NO PRODUCTS
    if (!products.length) {
      return res.status(200).json({
        success: true,
        totalProducts: 0,
        products: [],
        message:
          "No products found",
      });
    }

    // SUCCESS
    return res.status(200).json({
      success: true,
      totalProducts:
        products.length,
      products,
    });
  } catch (err) {
    console.log(
      "CATEGORY PRODUCTS ERROR:",
      err
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal server error",
      error: err.message,
    });
  }
};

module.exports =
  getSpecificProducts;