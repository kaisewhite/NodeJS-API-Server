require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  /** //PG libary looks for PG env variables in .env file by default
   * user: "api",
   * password: "password",
   * host: process.env.DBHOST,
   * port: process.env.DBPORT,
   * database: process.env.DATABASE,
   */
});

module.exports = pool;
