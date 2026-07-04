const express = require("express");
const { Userregistration, userLogin } = require("../controllers/userLoginCtrl");
const verifyTokens = require("../middlewares/verifyToken");
const getUserInfo = require("../controllers/getUserData");


const route = express.Router();


route.post('/registration',Userregistration)
route.post('/login',userLogin)
route.get('/user/:id',verifyTokens,getUserInfo)








module.exports = route