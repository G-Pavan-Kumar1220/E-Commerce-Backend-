const jwt = require("jsonwebtoken")

const verifyTokens=async(req,res,next)=>{
    const authorization = req.headers["authorization"];
    try {
        const token = authorization && authorization.split(" ")[1]
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        if(!decoded){
            return res.status(401).json({message:"the verify token are not working"})
        }
        req.user=decoded
        next()
    } catch (error) {
        console.log(error,"token verification is not working");
        
    }
}
module.exports= verifyTokens;