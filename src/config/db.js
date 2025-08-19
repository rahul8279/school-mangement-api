import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";


const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
await pool.query(`
      CREATE TABLE IF NOT EXISTS school (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255),
        latitude FLOAT,
        longitude FLOAT
      )
    `);

export async function connectDB() {
  try {
    const connection = await pool.getConnection();
    console.log(" MySQL Connected!");
    connection.release();
  } catch (err) {
    console.error(" Database connection failed:", err.message);
   
  }
}

export default pool;