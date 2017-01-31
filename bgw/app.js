module.exports = function(app) {
    var model = require("./model/models.server")(app);
    require("./service/well.service.server.js")(app,model);
};