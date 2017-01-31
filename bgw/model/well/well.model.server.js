module.exports = function (mongoose, app) {

    var wellSchema = require("./well.schema.server")(mongoose);
    var wellModel = mongoose.model("wellModel", wellSchema);

    var api = {
        "createWell": createWell,
        "findWellByName": findWellByName,
        "updateWellReading": updateWellReading,
        "deleteWell": deleteWell
    };
    return api;

    function createWell(well) {
        return wellModel.create(well);
    }


    function updateWellReading(wellId, wellReading) {
        return wellModel.findByIdAndUpdate(
            {
                _id: wellId
            },
            {$push: {"wellReadings": {value: wellReading.value}}},
            {safe: true, upsert: true, new:true}
        )
    }

    function findWellByName(wellName) {
        return wellModel.findOne(
            {
                wellName: wellName
            });
    }

    function deleteWell(wellId) {
        return wellModel.remove({_id: wellId});

    }

};