CREATE TABLE IF NOT EXISTS contact_info(
    contact_info_id SERIAL PRIMARY KEY
    , contact_type varchar (7) NOT NULL
    , contact_name varchar (256) NOT NULL
    , contact_email varchar (256) NOT NULL
    , contact_comment varchar (800) NOT NULL
);
