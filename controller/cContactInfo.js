const data = require("../model/mContactInfo.js");

console.log("cContactinfo");
function contactInfo(req, res) {
    //const variables
    const contactType = req.body.type;
    const contactName = req.body.fullName;
    const email = req.body.email;
    const comment = req.body.comment;

    //Passing contact info to the model.
    data.contactInfoDb(contactType, contactName, email, comment, function (
        error,
        results
    ) {
        if (error || results === null) {
            res.status(500).json({
                success: false,
                error: error
            });
        } else {
            //res.status(200).json({ success: "success" });
            res.render("pages/contactUs", { success: "alert alert-success" });
        }
    });
}
module.exports = {
    contactInfo: contactInfo
};
