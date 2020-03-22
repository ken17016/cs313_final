var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }));

router.use(function timeLog(req, res, next) {
    next();
});

/** Get contact page */
router.get("/", (req, res) =>
    res.render("pages/contactUs", { success: "hide" })
);

module.exports = router;
