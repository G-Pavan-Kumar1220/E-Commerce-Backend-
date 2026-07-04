const tokenGeneration = require('../middlewares/jwtToken');
const User = require('../models/userModel')
const bcrypt = require("bcrypt")

const Userregistration = async(req,res)=>{
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"missing the values to register"})
        }
        const userExist = await User.findOne({email})

        if(userExist){
            return res.status(400).json({message:"User already exist try to Login"})
        }
        
        const hashPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            name,
            email,
            password:hashPassword
        })
        await newUser.save()
        res.status(201).json({
            message:"user registration sucess fully",
            newUser
        
        })      
    } catch (error) {
        console.log(error);
        console.log("error at user registration");
        
    }
}

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "User does not exist, try to register" });
    }

    const passwordCheck = await bcrypt.compare(password, userExist.password);

    if (!passwordCheck) {
      return res.status(400).json({ message: "Password is incorrect, try again" });
    }
    const userId = userExist._id
    const tokens = tokenGeneration(userId)
    if(!tokens){
      return res.status(500).json({message:"tokens are not generated failed token function"})
    }

    res.status(200).json({
      message: "User login success",
      user: userExist,
      tokens:tokens
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred in login controller" });
  }
};




module.exports= {Userregistration,userLogin}