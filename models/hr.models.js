var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var HrSchema = new Schema({
	title:String,
	num:Number,
	education:String,
	detail:String,
	site:String,
	pay:String,
	age:String,
	require:String,
	language:String,
	sex:String,
	telephone:Number,
	cateId: ObjectId,
	edimgurl:String,
	edimgurl1:String,
	edpattern:String,
	edcontent:String,
	edreson:String,
	stcontent:String,
	type:String,
	date: { type: Date, default: Date.now }
})

HrSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('hr',HrSchema,'hr');