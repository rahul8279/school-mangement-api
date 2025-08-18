import pool from "../config/db.js";

export default class SchoolModel {
  
  static async addSchool({ name, address, latitude, longitude }) {
    const query = `
      INSERT INTO school (name, address, latitude, longitude) 
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [name, address, latitude, longitude]);
    return { id: result.insertId, name, address, latitude, longitude };
  }

  static async getAllSchools() {
    const query = `SELECT * FROM school`;
    const [rows] = await pool.query(query);
    return rows;
  }
}
