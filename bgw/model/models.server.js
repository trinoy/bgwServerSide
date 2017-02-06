module.exports = function(app) {

    var connectionString = 'mongodb://localhost:27017/test';
    //var connectionString = 'mongodb://root:password@ds137749.mlab.com:37749/bgw';

    if(process.env.HEROKU_MONGODB_DB_PASSWORD) {
        connectionString = process.env.HEROKU_MONGODB_URL_PREFIX +
            process.env.HEROKU_MONGODB_DB_USERNAME + ":" +
            process.env.HEROKU_MONGODB_DB_PASSWORD +
            process.env.HEROKU_MONGODB_URL_SUFFIX +
            process.env.HEROKU_MONGODB_DB;
        console.log(connectionString);
    }

    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    var wellModel = require("./well/well.model.server")(mongoose,app);

    var model = {
        wellModel : wellModel
    }

    return model;
}