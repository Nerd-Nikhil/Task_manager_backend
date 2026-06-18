const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const {StatusCodes} = require("http-status-codes");
const responseFormatter = require("../middleware/responseFormatter.js")
const taskRouter = require("../tasks/tasks.router.js");
const authRouter = require("../auth/auth.router.js");
const userRouter = require("../users/user.route.js");
const expressWinstonLogger = require("../middleware/expresswinston.middleware.js");

function configApp(app){
    app.use(cors());
    
    let accessLogStream = fs.createWriteStream(path.join(__dirname,"..","access.log"),{flags:"a"});
    app.use(morgan("combined",{stream:accessLogStream}));
    
    app.use(responseFormatter);
    
    app.use("/",taskRouter);
    app.use("/",authRouter);
    app.use("/",userRouter);
    
    app.use((req,res)=>{res.status(StatusCodes.NOT_FOUND).json(null)});
    app.use(expressWinstonLogger);
}

module.exports = configApp;