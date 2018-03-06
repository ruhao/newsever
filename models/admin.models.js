var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var AdminSchema = new Schema({
	reg:String,
	password:String,
	workarea:String,
	date: { type: Date, default: Date.now }
})

AdminSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('admin',AdminSchema,'admin');