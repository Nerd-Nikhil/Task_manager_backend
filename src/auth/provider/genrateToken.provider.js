const jwt = require("jsonwebtoken");

function generateTokenProvider(user){
    const payload = {
        sub:user["_id"],
        email:user.email,
        iat:Math.floor(Date.now()/1000),
        exp:Math.floor(Date.now()/1000)+parseInt(process.env.EXPIRY_TIME)
    }
    return jwt.sign(payload,process.env.SECRET_KEY);
}
module.exports = generateTokenProvider;