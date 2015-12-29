var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/news', function(req, res, next){
    var data = [{
        title: "淘宝聚划算",
        icon: "icon_cstc_b.png",
        images: [{src: 'attSuccess.png'}, {src: 'banner.jpg'}, {src: 'pic-invitation_195.jpg'}],
        desc: '淘剁手',
        topics:[{name: "大实惠"}, {name: "蚂蚁金服"}],
        dateFormat: '2小时前',
        labels: [{name:'专', on: 'red'}],
        likes: 0,
        comments: 0,
        status: 1
    },{
        title: '红山资本',
        icon: 'banner.jpg',
        images: [],
        desc: '一定要投啊',
        topics:[{name: "最美50"}],
        dateFormat: '3小时前',
        labels: [{name: '参选', on: 'orange'}, {name: '合作机构', on: ''}],
        likes: 180,
        comments: 200,
        status: 0
    },{
        title: '阿里巴巴集团',
        icon: 'banner.jpg',
        images: [],
        desc: '中国互联网领域先锋',
        topics:[{name: "互联网"}, {name: "电商"}],
        dateFormat: '昨天 12:00',
        labels: [],
        likes: 480,
        comments: 200,
        status: 0
    },{
        title: '相宜本草',
        icon: 'banner.jpg',
        images: [],
        desc: '肌肤锁水',
        topics:[{name: "护肤品"}],
        dateFormat: '昨天14:12',
        labels: [],
        likes: 180,
        comments: 200,
        status: 0
    },{
        title: '美加净',
        icon: 'banner.jpg',
        images: [],
        desc: '厨房除菌',
        topics:[],
        dateFormat: '2015-12-12',
        labels: [],
        likes: 0,
        comments: 20,
        status: 0
    }];
    res.send(data);
});
module.exports = router;
