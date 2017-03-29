module.exports = function (mongoose, app) {

    var aboutUsSchema = require("./aboutUs.schema.server")(mongoose);
    var aboutUsModel = mongoose.model("aboutUsModel", aboutUsSchema);

    var api = {
        "createAboutUs": createAboutUs,
        "findAboutUs": findAboutUs,
        "deleteAboutUs": deleteAboutUs
    };
    return api;

    function createAboutUs(aboutUs) {
        return aboutUsModel.create(aboutUs);
    }

    function findAboutUs(aboutUsName) {
        return aboutUsModel.findOne(
            {
                name: aboutUsName
            });
    }

    function deleteAboutUs(aboutUsId) {
        return aboutUsModel.remove({_id: aboutUsId});
    }

};