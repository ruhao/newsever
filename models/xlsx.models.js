var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var XlxsSchema = new Schema({
	name:String,
	info:String,
	where:String,
	time:String,
	predict:String,
	finish:String,
	date: { type: Date, default: Date.now }
})

XlxsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('xlxs',XlxsSchema,'xlxs');