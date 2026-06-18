const {StatusCodes} = require("http-status-codes");
const createTaskProvider = require("./provider/createtask.provider");
const getTaskProvider = require("./provider/gettask.provider");
const updateTaskProvider = require("./provider/updatetask.provider");
const deleteTaskProvider = require("./provider/deletetask.provider");


async function handleGettasks(req,res){
    return await getTaskProvider(req,res);;
}
async function handlePosttasks(req,res){
    return await createTaskProvider(req,res);
    
}
async function handlePatchtasks(req,res){
    return await updateTaskProvider(req,res);
}
async function handleDeletetasks(req,res){
    return await deleteTaskProvider(req,res);
}

module.exports = {handleDeletetasks,handleGettasks,handlePatchtasks,handlePosttasks};