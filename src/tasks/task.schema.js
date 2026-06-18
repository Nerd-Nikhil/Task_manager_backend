const {Schema, model} = require("mongoose");
const taskSchema = new Schema({
    title:{
        type:String,
        required:[true,"title is required"],
        trim:true,
        maxLength:[100,"title cannot be more than 100 words"]
    },
    description:{
        type:String,
        required:[true,"description is required"],
        trim:true,
        maxLength:[500,"description cannot be more than 500 words"]
    },
    status:{
        type:String,
        required:[true,"Task Status is required"],
        enum:["todo","inProgress","completed"],
        default:"todo"
    },
    priority:{
        type:String,
        required:[true,"task priority is required"],
        enum:["low","normal","high"],
        default:"normal"
    },
    dueDate:{
        type:Date,
        required:[true,"Task due dateis required"]
    }
},
{timestamps:true,versionKey:false}
);
const Task = model("Task",taskSchema);
module.exports = Task;