var express = require('express')
var router = express.Router();

router.use(function(req, res, next) {
    console.log('Time of request is: ', Date.now());
    next();
});

// get all workers list:
router.get('/', function(req, res){
    res.send('Here will be a list of workers...');
});

router.get('/worker/:id', function(req, res) {
    res.send('Here will be information about worker...by id');
});

module.exports = router;