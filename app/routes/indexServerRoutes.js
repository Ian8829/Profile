module.exports =  app => {
    const index = require('../controllers/indexServerControllers');
    app.get('/', index.render);
};



