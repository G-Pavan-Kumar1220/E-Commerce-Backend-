const Products = require("../models/products");

const addProducts = async(req,res)=>{
    try {
        const {name,productCategory,description,price,image} = req.body
        if(!name || !productCategory || !description || !price || !image ){
            return res.status(404).json({message:"product details missing"})
        }
        const newProduct = new Products({
            name,
            productCategory,
            description,
            price,
            image
        })
        await newProduct.save()
        res.status(200).json({message:"product added",newProduct})
    } catch (error) {
        console.log(error,"error at product adding control")
    }
}



module.exports=addProducts