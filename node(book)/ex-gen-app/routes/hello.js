var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let msg = 'はじめの一歩';
    if (req.session.message != undefined) {
        msg = req.session.message;
    }
    let data = {
        title: 'Hello!',
        content: msg,
    };
    res.render('hello', data);
});

router.post('/post', (req, res, next) => {
    const msg = req.body['message'];
    req.session.message = msg;
    const data = {
        title: 'Hello',
        content: req.session.message,
    };
    res.render('hello', data);
});

module.exports = router;
