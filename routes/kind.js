var express = require("express")
var router = express.Router();

var DataCtrl = require("../controller/kind.controller.js");

router.get('/data',DataCtrl.lists);
router.post('/data',DataCtrl.create);
router.put('/data/:id',DataCtrl.update);
router.delete('/data/:id',DataCtrl.remove)

module.exports = router;
