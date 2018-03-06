var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var BrandSchema = new Schema({
	name:String,
	imgurl:String,
	type:String,
	detail:String,
	date: { type: Date, default: Date.now }
})

BrandSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('brand',BrandSchema,'brand');