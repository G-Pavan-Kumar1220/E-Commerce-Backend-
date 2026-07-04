const express = require("express");
const verifyTokens = require("../middlewares/verifyToken");
const addProducts = require("../controllers/AddProducts");
const getAllProducts = require("../controllers/getProducts");
const getSpecificProducts = require("../controllers/specificProductfilter");
const selectedProductDetaiols = require("../controllers/SelectedProductDetails");


const productsRoute = express.Router();

// adding products
productsRoute.post('/add',addProducts)
// getting all products
productsRoute.get('/get',getAllProducts)
// get specific filter products 
productsRoute.get('/',getSpecificProducts)
// get seected product
productsRoute.get("/:id",selectedProductDetaiols)



module.exports=productsRoute