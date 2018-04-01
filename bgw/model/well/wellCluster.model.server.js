module.exports = function (mongoose, app) {

    var wellClusterSchema = require("./wellCluster.schema.server")(mongoose);
    var wellClusterModel  = mongoose.model("wellClusterModel", wellClusterSchema);

    var api = {
        "createCluster": createCluster,
        "addWellInCluster": addWellInCluster,
        "deleteCluster": deleteCluster,
        "updateCluster": updateCluster,
        "deleteWellInCluster": deleteWellInCluster,
        "getAllWellClusters": getAllWellClusters,
        "removeAllClusters" : removeAllClusters,
        "getWellsForCluster" :getWellsForCluster,
        "updateWellInCluster" : updateWellInCluster
    };
    return api;

    function createCluster(wellClusters) {
        return wellClusterModel.insertMany(wellClusters);
    }


    function addWellInCluster(wellClusterId, well) {
        return wellClusterModel.findOneAndUpdate(
            {
                clusterNo: wellClusterId
            },
            {$push: {"wells": well}},
            {safe: true, upsert: true, new:true}
        )
    }


    function deleteCluster(wellClusterId) {
        return wellClusterModel.remove({_id: wellClusterId});

    }

    function deleteWellInCluster(wellClusterId,wellId) {
        return wellClusterModel.findOneAndUpdate(
            {
                clusterNo: wellClusterId
            },
            { $pull: { wells: {_id : wellId} }
            })
    }


    function updateCluster(wellClusterId,cluster) {
        return wellClusterModel.findOneAndUpdate(
            {
                _id: wellClusterId
            },
            {
                clusterNo : cluster.clusterNo,
                installed: cluster.installed,
                activationInfo : cluster.activationInfo
            })
    }

    function updateWellInCluster(wellClusterId,wellId,well) {
        return wellClusterModel.findOneAndUpdate(
            {
                clusterNo: wellClusterId,
                'wells._id' : wellId
            },
            { '$set': {
                'wells.$.wellId' : well.wellId,
                'wells.$.wellShortName' : well.wellShortName,
                'wells.$.wellLocDesc': well.wellLocDesc,
                'wells.$.lat': well.lat,
                'wells.$.lng': well.lng,
                'wells.$.installed' : well.installed,
                'wells.$.inRange' : well.inRange,
                'wells.$.wellElevation': well.wellElevation
            }
            })
    }



    function getAllWellClusters(){
        return wellClusterModel.find({});
    }

    function getWellsForCluster(wellCluster){
        return wellClusterModel.findOne({clusterNo:wellCluster});
    }

    function removeAllClusters (){
        return wellClusterModel.remove({});
    }
};