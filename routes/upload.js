var express = require('express');
var router = express.Router();

var dataCtrl = require('../controller/upload.controller');

router.post('/upload',dataCtrl.uploads);
router.post('/upload/:cateId',dataCtrl.upload);
router.get('/list',dataCtrl.lists);


module.exports = router;
