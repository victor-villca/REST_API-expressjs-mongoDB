const errorMiddleware = (err, req, res, next) =>{
    const status = res.statusCode ? res.statusCode : 400;
    res.status(status);
    res.json({
        middleware: "Error - middleware",
        message: err.message,
        status: status,
        stack: process.env.NODE_ENV === "development" ? err.stack : "null",        
    })
}

export default errorMiddleware;