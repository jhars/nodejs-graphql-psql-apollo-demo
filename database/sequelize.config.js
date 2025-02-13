require('dotenv').config();
const process = require('process');
const { DB_HOST, DATABASE_URL } = process.env

module.exports = {
  production: {
   use_env_variable: 'DATABASE_URL'
  },

  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT  
  }
  
};