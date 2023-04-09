const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB,
    connectionLimit: process.env.CONNECTION_LIMIT_DB

})

async function callFunction() {
    let conn;
    try {
        conn = await pool.getConnection();
        const dbs = await conn.query("show databases");
        console.log("The query fetching return this: ");
        console.log(dbs);
    } catch (err) {
        console.log("Este fue el error: ", err);
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

callFunction();
