const express = require("express");
const userRouter = express.Router();
const userController = require("./user.controller");
const createUserValidator = require("./validators/createUserValidator");
const  {StatusCodes} = require("http-status-codes");
const {validationResult} = require("express-validator");

userRouter.post("/user",createUserValidator,(req,res)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        return userController.handleUser(req,res);
    }
    else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
});

module.exports = userRouter;