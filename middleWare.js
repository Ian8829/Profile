const middleWare = {
    requireAuthentication: (req, res, next) => {
        console.log('Private route hit!');
        next();
    },
    logger: (req, res, next) => {
    console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
    }
};

module.exports = middleWare;