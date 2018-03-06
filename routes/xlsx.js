var express = require("express")
var router = express.Router();

var DataCtrl = require("../controller/xlsx.controller.js");

router.post('/list',DataCtrl.list);
router.post('/data',DataCtrl.create);
router.put('/data/:id',DataCtrl.update)
router.post('/deletes',DataCtrl.deletes)


module.exports = router;