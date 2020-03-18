const express = require("express");
const app = express();
const dev = app.get('env') !== 'production';
const { Pool } = require("pg");
var connectionString;
var pool;

// Production Connection string. 
connectionString = process.env.DATABASE_URL;

console.log("db.js");
if (!dev) {
    pool = new Pool({
        connectionString: connectionString
    });
}

// Developer connection string.
if (dev) {
    connectionString = {
        user: '',
        host: '',
        database: '',
        password: '',
        port: 5432
    };

    // const pool = new Pool(connectionString: connectionString);
    pool = new Pool({
        user: '',
        host: '',
        database: '',
        password: '',
        port: 5432
    });
}



module.exports = pool;

