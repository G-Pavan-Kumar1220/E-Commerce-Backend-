const mongoose = require("mongoose")

const cartItemSchema = mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required:true
    },
    quantity:{
        type:Number,
        default:true
    }
});

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,

    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true,

    },
    cart:[cartItemSchema]
},{timestamps:true})

module.exports  = mongoose.model('User',userSchema)