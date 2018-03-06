var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var AboutSchema = new Schema({
	title:String,
	content:String,
	imgurl:String,
	cateId: ObjectId,
	type:String,
	bgimg:String,
	date: { type: Date, default: Date.now }
})

AboutSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('about',AboutSchema,'about');