const Task = require("../task.schema");
const {matchedData} = require("express-validator");
const {StatusCodes} = require("http-status-codes");
const errorLogger = require("../../helper/errorLogger.helper");

async function updatetaskprovider(req,res){
    const validatedResult = matchedData(req);
    try{
        const task = await Task.findById(req.body["_id"]);
        task.title = validatedResult.title || task.title;
        task.description = validatedResult.description || task.description;
        task.status = validatedResult.status || task.status;
        task.priority = validatedResult.priority || task.priority;
        task.dueDate = validatedResult.dueDate || task.dueDate;
        await task.save();
        return res.status(StatusCodes.OK).json(task)
    }
    catch(error){
        errorLogger(`Error updating a task: ${error.message}`,req,error);
        return res.status(StatusCodes.GATEWAY_TIMEOUT).json({Reason:"unable to connectdue to timeout, please try after sometime"});
    }
    
}
module.exports = updatetaskprovider;