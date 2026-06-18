const {getReasonPhrase, StatusCodes} = require("http-status-codes");

function responseFormatter(req,res,next){
    let originalJson = res.json;
    res.json = (data)=>{
        const statusCode = res.statusCode !== 200 ? res.statusCode : StatusCodes.OK;
        const response = {
            status:statusCode>=200 && statusCode<300 ? "success":"error",
            statusCode:statusCode,
            message:getReasonPhrase(res.statusCode),
            // data:statusCode>=200 && statusCode<300 ? data:null,
            // error:statusCode>=200 && statusCode<300 ? null:data
        };
        if (statusCode>=200 && statusCode<300){
            response.data = data && data.pagination ? data.data : data;
        }
        if(statusCode>=400){
            response.error = data;
        }
        if(data && data.pagination){
            response.pagination = data.pagination;
        }
        originalJson.call(res,response);
    };
    next();
}

module.exports = responseFormatter;