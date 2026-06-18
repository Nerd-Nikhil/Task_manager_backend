const express = require("express");
const authRouter = express.Router();
const authController = require("./auth.controller");
const {StatusCodes} = require("http-status-codes");
const {validationResult} = require("express-validator");
const loginValidator = require("./validator/login.validator");

authRouter.post("/login",loginValidator,(req,res)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        return authController.handleLogin(req,res);
    }
    else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
});

module.exports = authRouter;