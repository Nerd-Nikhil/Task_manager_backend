const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    firstName:{
        type:String,
        required:[true,"This field is required"],
        trim:true,
        maxLength:[50,"first name cannot be more than 50 words"]
    },
    lastName:{
        type:String,
        required:[true,"This field is required"],
        trim:true,
        maxLength:[50,"last name cannot be more than 50 words"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        trim:true,
        unique:true,
        lowercase:true,
        validate:{
            validator:function (email){
                return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
            },
            message:()=>`Please enter a valid email address`
        }
    },
    password:{
        type:String,
        required:[true,"password is required"],
    }

});



const User = model("User",userSchema);
module.exports = User;