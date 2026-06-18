const Task = require("../task.schema");
const { matchedData } = require("express-validator");
const {StatusCodes} = require("http-status-codes");
const errorLogger = require("../../helper/errorLogger.helper");

async function gettaskprovider(req,res){
    const validatedResult = matchedData(req);
    try{
        const totalTasks = await Task.countDocuments();
        const currentPage = validatedResult.page;
        const itemsPerPage = validatedResult.limit;
        const order = validatedResult.order;
        const totalPages = Math.ceil(totalTasks/itemsPerPage);
        const nextPage = currentPage === totalPages ? currentPage : currentPage+1;
        const previousPage = currentPage === 1 ? currentPage : currentPage-1;
        const baseUrl = `${req.protocol}://${req.get("host")}${req.originalUrl.split("?")[0]}`;

        const tasks = await Task.find({
            status:{$in:["todo","inProgress"]}
        }).limit(itemsPerPage).skip(currentPage-1);

        let finalResponse = {data:tasks,
            pagination:{
                meta:{
                    itemsPerPage:itemsPerPage,
                    totalItems:totalTasks,
                    currentPage:currentPage,
                    totalPages:totalPages
                },
                links:{
                    first:`${baseUrl}/?limit=${itemsPerPage}&page=${1}&order=${order}`,
                    last:`${baseUrl}/?limit=${itemsPerPage}&page=${totalPages}&order=${order}`,
                    current:`${baseUrl}/?limit=${itemsPerPage}&page=${currentPage}&order=${order}`,
                    next:`${baseUrl}/?limit=${itemsPerPage}&page=${nextPage}&order=${order}`,
                    previousPage:`${baseUrl}/?limit=${itemsPerPage}&page=${previousPage}&order=${order}`,
                }
            }
        }

        return res.status(StatusCodes.OK).json(finalResponse);
    }
    catch(error){
        console.log(error);
        errorLogger(`Error fetching the tasks: ${error.message}`,req,error);
        return res.status(StatusCodes.GATEWAY_TIMEOUT).json({Reason:"unable to connectdue to timeout, please try after sometime"});
    }
}
module.exports = gettaskprovider;