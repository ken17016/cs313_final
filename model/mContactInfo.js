const pool = require("./db.js");

const contactInfoDb = (
    contact_type,
    contact_name,
    contact_email,
    contact_comment,
    callback
) => {
        const sql =
        `Insert into contact_info (
        contact_type
        , contact_name
        , contact_email
        , contact_comment
        ) 
        VALUES (
        $1::text
        , $2::text
        , $3::text
        , $4::text
        );`;
    const params = [contact_type, contact_name, contact_email,
        contact_comment];
    pool.query(sql, params, (err, result) => {
        if (err) {
            callback(err, null);
        }*/
    callback(null, { success: "success" });
    });
};

module.exports = {
    contactInfoDb: contactInfoDb
};
