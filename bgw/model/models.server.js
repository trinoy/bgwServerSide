module.exports = function(app) {
    var mongoose = require("mongoose");

    if(process.env.DB_URL) {
        connectionString = process.env.DB_URL;
        mongoose.connect(connectionString, {
            useMongoClient: true
        });
    }

    var wellModel = require("./well/well.model.server")(mongoose,app);
    var wellClusterModel = require("./well/wellCluster.model.server")(mongoose,app);
    var aboutUsModel = require("./aboutUs/aboutUs.model.server")(mongoose,app);
    var guideModel = require("./guide/guide.model.server")(mongoose,app);

    var model = {
        wellModel : wellModel,
        wellClusterModel : wellClusterModel,
        aboutUsModel : aboutUsModel,
        guideModel: guideModel
    };

    return model;
};