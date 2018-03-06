var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var ProductsSchema = new Schema({
	name:String,
	origin:String,
	describe:String,
	ingredient:String,
	weight:String,
	expiration:String,
	storaged:String,
	title:String,
	content:String,
	title1:String,
	content1:String,
	title2:String,
	content2:String,
	imgurl:String,
	match:String,
	correlation:String,
	introduction:String,
	barcode:String,
	cateId: ObjectId,
	type:String,
	belong:String,
	date: { type: Date, default: Date.now }
})

ProductsSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('products',ProductsSchema,'products');