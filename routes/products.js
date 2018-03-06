var express = require("express")
var router = express.Router();

var DataCtrl = require("../controller/products.controller.js");

router.post('/list',DataCtrl.list);
router.post('/data',DataCtrl.create);
router.delete('/data/:id',DataCtrl.remove)
router.put('/data/:id',DataCtrl.update)
router.post('/deletes',DataCtrl.deletes)


module.exports = router;