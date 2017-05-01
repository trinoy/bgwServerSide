module.exports = function (mongoose, app) {

    var aboutUsSchema = require("./aboutUs.schema.server")(mongoose);
    var aboutUsModel = mongoose.model("aboutUsModel", aboutUsSchema);

    var api = {
        "createAboutUs": createAboutUs,
        "findAboutUs": findAboutUs,
        "deleteAboutUs": deleteAboutUs,
        "updateAboutUs" : updateAboutUs
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

    function updateAboutUs(aboutUsId,aboutUs) {
        return aboutUsModel.findOneAndUpdate(
            {_id: aboutUsId},
            {
                name: aboutUs.name,
                content1: aboutUs.content1,
                content2: aboutUs.content2,
                content3: aboutUs.content3,
                content4: aboutUs.content4,
                content5: aboutUs.content5
            }
            );
    }

    function deleteAboutUs(aboutUsId) {
        return aboutUsModel.remove({_id: aboutUsId});
    }

};