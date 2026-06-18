const express = require("express");
const taskRouter = express.Router();
const taskController = require("./tasks.controller");
const createTaskValidator = require("./validators/createTask.validators");
const getTaskValidator = require("./validators/getTask.validator");
const updateTaskValidator = require("./validators/updateTask.validator");
const deleteTaskValidator = require("./validators/deleteTask.validator");
const {validationResult} = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const authenticateToken = require("../middleware/authenticateToken.middleware");



taskRouter.get('/tasks',[getTaskValidator,authenticateToken],(req,res)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        return taskController.handleGettasks(req,res);
    }
    else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }

});

taskRouter.post('/tasks',[createTaskValidator,authenticateToken],(req,res)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        return taskController.handlePosttasks(req,res);
    }
    else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
});

taskRouter.patch('/tasks',[updateTaskValidator,authenticateToken],(req,res)=>{
    const result = validationResult(req);
    if (result.isEmpty()){
        return taskController.handlePatchtasks(req,res)
    }
    else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
});

taskRouter.delete('/tasks',[deleteTaskValidator,authenticateToken],(req,res)=>{
    const result = validationResult(req);
    if (result.isEmpty()){
        return taskController.handleDeletetasks(req,res)
    }
    else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }

});


module.exports = taskRouter;