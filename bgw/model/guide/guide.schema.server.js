module.exports = function(mongoose)
{
    var guideSchema = mongoose.Schema({
        name: String,
        tab1 : String,
        tab2 : String,
        guides : [{title:String,content1:String,content2:String}]
    },  {collection: "bgw.guide", safe:true});

    return guideSchema;
};