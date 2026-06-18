const {body} = require("express-validator");

const createTaskValidator = [
    body("title","The title cannot be empty").notEmpty(),
    body("title","The title must be a String").isString(),
    body("title").trim(),
    body("title","The title cannot be more than 100 chars").isLength({max:100}),

    body("dueDate","Due Datemust be a valid ISO8601 String").isISO8601().notEmpty(),

    body("priority","invalid entry").isIn(["low","normal","high"]),

    body("status","invalid entry").isIn(["todo","inProgress","completed"]),

    body("description","description cannot be empty").notEmpty().trim()  ,
    body("description","description cannot be more than 500 chars").isLength({max:500}),    
]
module.exports = createTaskValidator;