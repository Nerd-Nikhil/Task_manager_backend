const { StatusCodes } = require("http-status-codes");
const createUserProvider = require("./provider/createuser.provider");

async function handleUser(req,res){
    return await createUserProvider(req,res);
}

module.exports = {handleUser};