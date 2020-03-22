var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
var contactDashboard = require('../controller/cContactDashboard.js')

express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))

router.use(function timeLog(req, res, next) {
    next();
});

/** Get contact page */
router.get('/', contactDashboard.contactDashboard);


module.exports = router;

