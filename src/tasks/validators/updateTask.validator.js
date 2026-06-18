const {body} = require("express-validator");

const updateTaskValidator = [
    body("_id","valid  document id is required").notEmpty().isMongoId(),
    body("title","The title must be a String").isString().optional().trim(),
    body("title","The title cannot be more than 100 chars").isLength({max:100}),

    body("dueDate","Due Datemust be a valid ISO8601 String").isISO8601().optional(),

    body("priority","invalid entry").isIn(["low","normal","high"]).optional(),

    body("status","invalid entry").isIn(["todo","inProgress","completed"]).optional(),

    body("description","description cannot be empty").optional().trim().isString()  ,
    body("description","description cannot be more than 500 chars").isLength({max:500})
    
];
module.exports = updateTaskValidator;