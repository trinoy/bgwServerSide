module.exports = function (mongoose, app) {

    var guideSchema = require("./guide.schema.server")(mongoose);
    var guideModel = mongoose.model("guideModel", guideSchema);

    var api = {
        "createGuides": createGuides,
        "findGuides": findGuides,
        "deleteGuides": deleteGuides
    };
    return api;

    function createGuides(guide) {
        return guideModel.create(guide);
    }

    function findGuides(guideName) {
        return guideModel.findOne(
            {
                name: guideName
            });
    }

    function deleteGuides(guideId) {
        return guideModel.remove({_id: guideId});
    }

};