var mongoose = require("mongoose");
var mongooseMaterialized = require("mongoose-materialized");
var Schema = mongoose.Schema;


var KindSchema = new Schema({
	text:String,
	type:String,
})
KindSchema.plugin(mongooseMaterialized)
var Kind = mongoose.model('Kind',KindSchema,'kind')
module.exports=Kind;

