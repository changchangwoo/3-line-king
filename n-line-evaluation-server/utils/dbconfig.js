const mysql = require("mysql2");
require("dotenv").config()

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PW,
    database: "3-line-king",
    dateStrings: true,
});

module.exports = connection;