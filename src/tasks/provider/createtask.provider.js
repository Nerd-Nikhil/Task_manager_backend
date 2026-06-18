const { matchedData } = require("express-validator");
const {StatusCodes} = require("http-status-codes");
const Task = require("../task.schema");
const errorLogger = require("../../helper/errorLogger.helper");

async function createTaskProvider(req,res){
    const validatedResult = matchedData(req);
    const task = new Task(validatedResult);
    try{
        await task.save(); 
        return res.status(StatusCodes.CREATED).json(task);
    }
    catch(error){
        console.log(error);
        errorLogger(`Error createing a new task: ${error.message}`,req,error);
        return res.status(StatusCodes.GATEWAY_TIMEOUT).json({Reason:"unable to connectdue to timeout, please try after sometime"});
    }
    
};
module.exports = createTaskProvider;