const userLoginProvider = require("./provider/login.user.provider");

async function handleLogin(req,res){
    return await userLoginProvider(req,res);  
}

module.exports={handleLogin};