const jwt = require("jsonwebtoken")


const tokenGeneration=({userId})=>{
    try {
        const token = jwt.sign({userId},process.env.SECRET_KEY)
        if(!token){
            return console.log("failed to generated the tokens");
            
        }
        console.log(token);
        
        return token
        
    } catch (error) {
        console.log(error,"error takes place in the token genertion function");
        
    }
}
 module.exports = tokenGeneration