var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var ProductSchema = new Schema({
	title:String,
	content:String,
	type:String,
	detaildate:String,
	cateId: ObjectId,
	year:String,
	day:String,
	imgurl:String,
	htitle:String,
	hyear:String,
	hday:String,
	hcontent:String,
	ytitle:String,
	yyear:String,
	yday:String,
	ycontent:String,
	zimgurl1:String,
	zimgurl2:String,
	zimgurl3:String,
	zimgurl4:String,
	zimgurl5:String,
	date: { type: Date, default: Date.now }
})

ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('product',ProductSchema,'product');