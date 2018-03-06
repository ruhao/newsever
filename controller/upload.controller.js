var mongoose = require('mongoose');
var multer = require('multer')
var path = require('path')
const DateModel = require('../models/upload.models');

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './upload')//临时放到一个upload文件下
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + file.originalname)//命名图片名字和格式
	}
})
//上图片有附属的ID
exports.upload = function(req, res, next) {
	var cateId=req.params.cateId
	
	var upload = multer({
		storage: storage
	}).single('avatar');
	upload(req, res, function(err) {
		const dateModel = new DateModel(req.file);
		dateModel.cateId=cateId
		dateModel.save()
			.then(data => {
				res.json(data);
			})
		res.end('File is uploaded')
	})
}
//上传
exports.uploads = function(req, res, next) {
	
	var upload = multer({
		storage: storage
	}).single('avatar');
	upload(req, res, function(err) {
		const dateModel = new DateModel(req.file);
		dateModel.save()
			.then(data => {
				res.json(data);
			})
		res.end('File is uploaded')
	})
}
//查找所有图片
exports.lists = function(req, res, next) {

	DateModel.find({}, function(err, data) {
		res.json(data);
	})
}