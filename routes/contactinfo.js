var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
var contact = require('../controller/cContactInfo.js')

express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))

router.use(function timeLog(req, res, next) {
    next();
});

/** Get contact page */
router.post('/', contact.contactInfo);


module.exports = router;

