module.exports = function(mongoose)
{
    //var websiteSchema = require("../website/website.schema.server")(mongoose);
    var wellSchema = mongoose.Schema({
        wellId: String,
        wellName : String,
        wellElevation : Number,
        wellReadings  : [{value:String,dateCreated: {type: Date, default: Date.now}}]
    },  {collection: "bgw.well", safe:true});

    return wellSchema;
};