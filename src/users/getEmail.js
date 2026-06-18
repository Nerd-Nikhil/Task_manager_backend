const User = require("./user.schema")

async function getEmail(email) {
    try{
        const user = await User.findOne({email:email});
        return user;
    }
    catch(error){
        return error;
    }
}

module.exports = getEmail;