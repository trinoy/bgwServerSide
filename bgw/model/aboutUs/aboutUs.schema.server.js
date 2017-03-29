module.exports = function(mongoose)
{
    //var websiteSchema = require("../website/website.schema.server")(mongoose);
    var aboutUsSchema = mongoose.Schema({
        name: String,
        content1 : String,
        content2 : String,
        content3 : String,
        content4 : String,
        content5 : String,
        url  : String
    },  {collection: "bgw.aboutUs", safe:true});

    return aboutUsSchema;
};