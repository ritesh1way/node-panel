var express = require('express');
var router = express.Router();

/* GET index. */
router.get('/', function (req, res, next) {
    res.render('admin/dashboard', { title: 'Admin | Login' });
});

/* GET Login page. */
router.get('/login', function (req, res, next) {
    res.render('admin/login', { title: 'Admin | Login' });
});

/* GET Login page. */
router.get('/signup', function (req, res, next) {
    res.render('admin/signup', { title: 'Admin | Sign Up' });
});
module.exports = router;