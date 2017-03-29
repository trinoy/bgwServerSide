module.exports = function(app) {
    var model = require("./model/models.server")(app);
    require("./service/well.service.server.js")(app,model);
    require("./service/wellCluster.service.server.js")(app,model);
    require("./service/AboutUsService.server")(app,model);
    require("./service/guideService.server")(app,model);
};