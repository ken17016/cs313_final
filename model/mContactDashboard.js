const pool = require("./db.js");

const contactDashboard = callback => {
    const sql = "SELECT * FROM contact_info;";
    pool.query(sql, (err, results) => {
        if (err) {
            callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    contactDashboard: contactDashboard
};
