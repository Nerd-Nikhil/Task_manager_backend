const errorLogger = require("../../helper/errorLogger.helper");
const {StatusCodes} = require("http-status-codes");
const {matchedData} = require("express-validator");
const getUserByEmail = require("../../users/getEmail");
const bcrypt = require("bcrypt");
const generateTokenProvider = require("./genrateToken.provider");

async function loginUserProvider(req,res){
    const validatedResult = matchedData(req);
    try{
        const user = await getUserByEmail(validatedResult.email);

        if(!user){
            return res.status(StatusCodes.NOT_FOUND).json({message:"User not found"});
        }

        const result = await bcrypt.compare(validatedResult.password,user.password);
        if(!result){
            return res.status(StatusCodes.BAD_REQUEST).json({message:"invalid credentials"});
        }

        const token = generateTokenProvider(user);
        return res.status(StatusCodes.OK).json({
            accessToken: token,
            firstName: user.firstName,
            lastName:user.lastName,
            email:user.email
        });
    }
    catch(error){
            errorLogger(`Error logging a user: ${error.message}`,req,error);
            return res.status(StatusCodes.GATEWAY_TIMEOUT).json({Reason:"unable to connect due to timeout, please try after sometime"});
        }
}

module.exports = loginUserProvider;