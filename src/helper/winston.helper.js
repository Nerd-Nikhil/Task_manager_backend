const path = require("path");
const winston = require("winston");

const transports = [
    new winston.transports.Console({
        level:"info",
        format:winston.format.combine(winston.format.colorize(),winston.format.simple()),
    }),
    new winston.transports.File({
        level:"info",
        format:winston.format.json(),
        filename:path.join(__dirname,"../..","info.log")
    }),
    new winston.transports.File({
        level:"error",
        format:winston.format.json(),
        filename:path.join(__dirname,"../..","error.log")
    }), 
];

const logger = winston.createLogger({
    format:winston.format.combine(
        winston.format.timestamp({
            format:"YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((info)=>{
            `${info.timestamp} [${info.level}]: ${info.message}`
        })
    ),
    transports:transports
});

module.exports = logger;
