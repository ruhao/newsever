var express = require("express")
var router = express.Router();

var DataCtrl = require("../controller/message.controller.js");

router.post('/list',DataCtrl.list);
router.post('/data',DataCtrl.create);


module.exports = router;