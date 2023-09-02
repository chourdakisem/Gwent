const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: 'localhost',
    database: 'gwent',
    user: 'postgres',
    port: 5432,
    password: process.env.USER
});

module.exports = pool;