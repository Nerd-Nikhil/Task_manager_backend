const {body} = require("express-validator");

const createUserValidator = [
    body("firstName","First name cannot be empty").notEmpty().isString().isLength({max:100}).trim(),
    body("lastName").optional().isString().isLength({max:100}).trim(),
    body("email","must be a valid email id").notEmpty().isEmail(),
    body("password", "password must be at least 8 characters with uppercase, lowercase, digit, and special character").notEmpty().isLength({min:8}).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
];
module.exports = createUserValidator;