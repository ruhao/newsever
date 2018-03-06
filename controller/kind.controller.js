var mongoose = require("mongoose")
const DataModel = require("../models/kind.models")

exports.create = function(req, res, next) {
	const datamodel = new DataModel(req.body)
	datamodel.save().then(
		data => {
			res.json(data)
		}
	)
}

exports.update = function(req,res,next){
	
	const id = req.params.id;
	
	DataModel.findByIdAndUpdate(id, { $set: req.body},{new:true})
	.then(data=>{
		res.json(data);
	})
}

exports.remove = function(req,res,next){	
	const id =req.params.id;
	var ids=[id];
	DataModel.findOne({_id:id},function(err,doc){
		if(doc){
			doc.getChildren().then(function(docs){
				for(var i = 0;i<docs.length;i++){
					ids.push(docs[i]._id);
				}
				DataModel.remove({_id:{$in:ids}})
				.then(data=>{
					res.json({'msg':'delete success','status':200});
				})
			})
		}
	})
	
}

exports.lists = function(req,res,next){
	DataModel.find({},function(err,data){
		var  rpTree = reverseTree(data,null);
		res.json(rpTree);
	})
}

function reverseTree(data,pid){

	var result=[],
	temp;
	var data = JSON.parse(JSON.stringify(data)); //DateModel的object中只接收一个text属性,所以要将其转为js的object

	for(var i in data){
		if(data[i].parentId == pid){
			result.push(data[i]);

			temp = reverseTree(data,data[i]._id);
			if(temp.length>0){
				data[i].children = temp;
			}
		}
	}
	return result;
}