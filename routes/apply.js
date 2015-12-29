var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('apply');
});

router.get('/GetAllSubCategroy', function(req, res, next) {
    fs.readFile( path.join(__dirname, './api/GetAllSubCategroy.json'), function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });
});

router.get('/GetMaterialList', function(req, res, next) {
    fs.readFile( path.join(__dirname, './api/GetMaterialList.json'), function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });
});

router.get('/GetDraftMaterialCount', function(req, res, next) {
        res.end("5");
});

router.post('/InsertMaterialToDraft', function(res, req, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send({status: "success"});
});

router.get('/Confirm', function(req, res, next) {
    res.render('confirm');
});

router.get('/GetDraftMaterialList', function(req, res, next) {
    fs.readFile( path.join(__dirname, './api/GetDraftMaterialList.json'), function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });
});

router.post('/DoneSubmitDraftApply', function(res, req, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send({status: "success"});
});
module.exports = router;
