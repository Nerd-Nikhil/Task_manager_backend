const express = require("express");
const configApp = require("./settings/config");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const envFile = process.env.NODE_ENV;

dotenv.config({path:envFile})


const app = express();
const port = process.env.PORT;


app.use(express.json());

configApp(app);

async function bootstrap(){
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("connected to mongoDB");
        app.listen(port,()=>{
            console.log(`application listening at port: ${port}`);
        })
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
bootstrap();