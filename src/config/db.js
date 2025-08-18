import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";


const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

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