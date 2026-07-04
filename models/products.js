const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    productCategory:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        require:true
    },

    
})

module.exports=mongoose.model('Products',productSchema)