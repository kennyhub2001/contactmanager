const { constants } = require("../constants");
const errorHandler = (err, req, res, next ) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: err.message, 
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message, 
                stackTrace: err.stack,
            });
            case constants.UNAUTHORISED:
            res.json({
                title: "Unauthorised",
                message: err.message, 
                stackTrace: err.stack,
            });
            case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message, 
                stackTrace: err.stack,
            });
            case constants.SERVER_ERROR:
            res.json({
                title: "server error",
                message: err.message, 
                stackTrace: err.stack,
            });
        default:
            console.log("No error, All good.");
            
            break;
    }
    
};

module.exports = errorHandler;