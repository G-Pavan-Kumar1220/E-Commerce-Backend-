const Products = require("../models/products")


const selectedProductDetaiols = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Products.findById(id)
        if (!product) {
         return res.status(404).json({ message: "Product not found" });
          } 
        res.status(200).json({product})
    } catch (error) {
        console.log(error);
        
       res.status(500).json({ message: "Server error while fetching product" });
    }
}

module.exports = selectedProductDetaiols