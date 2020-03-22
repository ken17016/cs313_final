const data = require("../model/mContactDashboard");

var contactDashboard = (req, res) => {
    data.contactDashboard(function (error, results) {
        if (error || results === null) {
            res.status(500).json({
                succes: false,
                error: error
            });
        } else {
            res.status(200).json(results);
        }
    });
};

module.exports = {
    contactDashboard: contactDashboard
};
