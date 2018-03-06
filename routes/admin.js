var express = require("express")
var router = express.Router();

var DataCtrl = require("../controller/admin.controller.js");

router.post('/data',DataCtrl.create);
router.get('/data',DataCtrl.find);


module.exports = router;