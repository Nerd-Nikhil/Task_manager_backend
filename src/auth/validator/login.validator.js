const {body} = require("express-validator");

const loginValidator = [
    body("email").notEmpty().isEmail().trim(),
    body("password").isLength({min:8}).isString()
];

module.exports = loginValidator;