const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Password123.',
  database: 'employee_db'
},
console.log('Connected to the employee_db database.')
);

module.exports = connection;