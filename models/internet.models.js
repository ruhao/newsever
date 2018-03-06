var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var InternetSchema = new Schema({
	title:String,
	content:String,
	imgurl:String,
	cateId: ObjectId,
	date: { type: Date, default: Date.now }
})

InternetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('internet',InternetSchema,'internet');