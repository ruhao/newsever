var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var MessageSchema = new Schema({
	title:String,
	telephone:Number,
	content:String,
	name:String,
	cateId: ObjectId,
	date: { type: Date, default: Date.now }
})

MessageSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('message',MessageSchema,'message');