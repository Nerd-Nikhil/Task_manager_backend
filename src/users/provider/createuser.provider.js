const User = require("../user.schema");
const errorLogger = require("../../helper/errorLogger.helper");
const {StatusCodes} = require("http-status-codes");
const {matchedData} = require("express-validator");
const bcrypt = require("bcrypt");
const getUserByEmail = require("../getEmail")

async function createUserProvider(req,res){
    const validatedResult = matchedData(req);
    try{
        const existingUser = await getUserByEmail(validatedResult.email);
        if (existingUser){
            return res.status(StatusCodes.BAD_REQUEST).json({
                message:"a user with this email already exists"
            })
        }
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(validatedResult.password,salt);
        const user = new User({
            firstName:validatedResult.firstName,
            lastName:validatedResult.lastName,
            email:validatedResult.email,
            password:hashedPass,
        });
        await user.save();

        return res.status(StatusCodes.CREATED).json({
            _id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email
        })
    }
    catch(error){
        errorLogger(`Error creating a user: ${error.message}`,req,error);
        return res.status(StatusCodes.GATEWAY_TIMEOUT).json({Reason:"unable to connect due to timeout, please try after sometime"});
    }
};

module.exports = createUserProvider;