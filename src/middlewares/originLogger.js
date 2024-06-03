const originLogger = (request, response, next) => {
    console.log(request.originalUrl);
    next();
}

module.exports = originLogger;