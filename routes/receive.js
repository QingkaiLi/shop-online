var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('receive');
});

router.get('/GetDTList', function(req, res, next) {
    fs.readFile( path.join(__dirname, './api/GetDTList.json'), function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });
});

module.exports = router;
