const Products = require("../models/products")

// getting all products

const getAllProducts = async(req,res)=>{
    try {
        const products = await Products.find()

        if (!products){
            return res.status(400).json({message:"No products found in the database"})
        }
        res.status(200).json({products})
    } catch (error) {
        console.log(error,"at getting all products");
        
    }
}

module.exports=getAllProducts