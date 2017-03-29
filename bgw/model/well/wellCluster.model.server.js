module.exports = function (mongoose, app) {

    var wellClusterSchema = require("./wellCluster.schema.server")(mongoose);
    var wellClusterModel  = mongoose.model("wellClusterModel", wellClusterSchema);

    var api = {
        "createCluster": createCluster,
        "addWellInCluster": addWellInCluster,
        "deleteCluster": deleteCluster,
        "deleteWellInCluster": deleteWellInCluster,
        "getAllWellClusters": getAllWellClusters,
        "removeAllClusters" : removeAllClusters
    };
    return api;

    function createCluster(wellClusters) {
        return wellClusterModel.insertMany(wellClusters);
    }


    function addWellInCluster(welllClusterId, well) {
        return wellClusterModel.findByIdAndUpdate(
            {
                _id: welllClusterId
            },
            {$push: {"wells": well}},
            {safe: true, upsert: true, new:true}
        )
    }


    function deleteCluster(welllClusterId) {
        return wellClusterModel.remove({_id: welllClusterId});

    }

    function deleteWellInCluster(welllClusterId,wellId) {
        //return wellClusterModel.remove({_id: welllClusterId});
        return wellClusterModel.update(
            { _id: welllClusterId
            },
            { $pullAll: { wells: wellId }
            })
    }

    function getAllWellClusters(){
        return wellClusterModel.find({});
    }

    function removeAllClusters (){
        return wellClusterModel.remove({});
    }
};