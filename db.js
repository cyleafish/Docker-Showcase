const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   port:'3306',
//   user: 'root',
//   password: 'root',
//   database: 'judge_questions'
// }); 
const pool = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME'
});
