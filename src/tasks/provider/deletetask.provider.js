const Task = require("../task.schema");
const { matchedData } = require("express-validator");
const {StatusCodes} = require("http-status-codes");
const errorLogger = require("../../helper/errorLogger.helper");

async function deletetaskprovider(req,res){
    const validatedResult = matchedData(req);
    try{
        const deletedTask = await Task.deleteOne({ _id:req.body["_id"]});
        return res.status(StatusCodes.OK).json(deletedTask);
    }
    catch(error){
        errorLogger(`Error deleting the tasks: ${error.message}`,req,error);
        return res.status(StatusCodes.GATEWAY_TIMEOUT).json({Reason:"unable to connectdue to timeout, please try after sometime"});
    }
}
module.exports = deletetaskprovider;