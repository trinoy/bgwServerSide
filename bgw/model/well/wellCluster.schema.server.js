module.exports = function(mongoose)
{
    //var websiteSchema = require("../website/website.schema.server")(mongoose);
    var wellClusterSchema = mongoose.Schema({
        clusterNo : String,
        installed: Boolean,
        activationInfo : String,
        clusterStyle : [
            {
                url: String,
                width: Number,
                height: Number,
                textColor: String,
                textSize: Number
            }
        ],
        wells : [
            {
                wellId : String,
                wellShortName : String,
                wellLocDesc: String,
                lat: Number,
                lng: Number,
                installed : Boolean,
                inRange : Boolean
            }
        ]
    },  {collection: "bgw.wellClusters", safe:true});

    return wellClusterSchema;
};