var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var IntmarketSchema = new Schema({
	name:String,
	imgurl:String,
	type:String,
	workarea:String,
	detail:String,
	date: { type: Date, default: Date.now }
})

IntmarketSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('intmarket',IntmarketSchema,'intmarket');