var express = require('express');
var path = require('path');

var router = express.Router();


//HOMEPAGE
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './../public/home.html'));
});


//GET
router.get('/api/images', function (req, res) {

});

//SEND
router.post('/api/images', function(req, res) {

});

router.delete('/api/images', function(req, res) {

});



module.exports = router;
