var mongoose = require("mongoose")
var DataModel = require("../models/about.models")

exports.create = function(req, res, next) {
	const datamodel = new DataModel(req.body)
	datamodel.save().then(
		data => {
			res.json(data)
		}
	)
}

exports.list = function(req, res, next) {
	var page = (req.body.page) ? req.body.page : 1;
	var limit = (req.body.limit) ? req.body.limit : 10;

	var queryCondition = {};
	if(req.body.title && req.body.title.trim().length > 0) {
		title = req.body.title;
		queryCondition.title = new RegExp(title, "i")
	}
	if(req.body.type && req.body.type.trim().length > 0) {
		type = req.body.type;
		queryCondition.type = new RegExp(type, "i")
	}
	DataModel.paginate(queryCondition, {
		sort: {
			_id: -1
		},
		page: parseInt(page),
		limit: parseInt(limit)
	}, function(err, result) {
		console.log(result)	
		console.log(queryCondition)	
		result.rows = result.docs;
		delete result.docs;

		res.json(result)
	})

}

exports.remove = function(req, res, next) {
	const id = req.params.id;
	DataModel.findByIdAndRemove(id, function(err, data) {
		res.json(data)
	})
}

exports.update = function(req, res, next) {
	const id = req.params.id;
	DataModel.findByIdAndUpdate(id, {
			$set: req.body
		}, {
			new: true
		})
		.then(data => {
			res.json(data)
		})
}


exports.deletes = function(req, res, next) {
	var ids = req.body.ids;
	if(ids.length > 0) {
		DataModel.remove({ _id: { $in: ids.split(',') } })
			.then(data => {
				res.json({ "msg": "--delete-success--", "status": 200 })
			})
	} else {
		res.json({ "msg": "--delete-fail--", "status": 404 })
	}
}
