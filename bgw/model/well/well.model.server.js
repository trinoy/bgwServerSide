module.exports = function (mongoose, app) {

    var wellSchema = require("./well.schema.server")(mongoose);
    var wellModel = mongoose.model("wellModel", wellSchema);

    var api = {
        "createWell": createWell,
        "findAllWells":findAllWells,
        "createWellBatch": createWellBatch,
        "findWellByName": findWellByName,
        "updateWellReading": updateWellReading,
        "deleteWell": deleteWell,
        "updateWell":updateWell,
        "deleteAllWells" : deleteAllWells,
        "findLastWellReadingByName" : findLastWellReadingByName
    };
    return api;

    function createWell(well) {
        return wellModel.create(well);
    }

    function deleteAllWells() {
        return wellModel.remove({});
    }

    function findAllWells() {
        return wellModel.find({});
    }


    function createWellBatch(wells) {
        return wellModel.insertMany(wells);
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

    function findLastWellReadingByName(wellName) {
        return wellModel.findOne(
            {
                wellName: wellName
            },
            { wellReadings: {$slice: -1} });
    }

    function deleteWell(wellId) {
        return wellModel.remove({_id: wellId});

    }

    function updateWell(wellId,well) {
        return wellModel.findOneAndUpdate(
            {
                _id: wellId
            },
            {
                wellId : well.wellId,
                wellName: well.wellName,
                wellElevation: well.wellElevation
            })
    }

};