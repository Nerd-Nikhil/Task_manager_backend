const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(StatusCodes.UNAUTHORIZED).json({message:"Invalid access"});
    }
    jwt.verify(token,process.env.SECRET_KEY,(error,user)=>{
        if(error){
            return res.status(StatusCodes.FORBIDDEN).json({message:"Invalid Token"});
        }
        req.user = user;
        next();
    });
};
module.exports = authenticateToken;