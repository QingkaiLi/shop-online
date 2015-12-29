var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('search');
});

router.get('/List', function(req, res, next) {
    res.render('searchList');
});

router.get('/GetApplylist', function(req, res, next) {
    fs.readFile( path.join(__dirname, './api/GetApplylist.json'), function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });
});


module.exports = router;
