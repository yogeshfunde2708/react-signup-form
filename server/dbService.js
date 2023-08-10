const mysql2 = require("mysql2");
const dotenv = require("dotenv");

let instance = null;
dotenv.config();

const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});
connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
});

class dbService {
  static getDbServiceInstance() {
    return instance ? instance : new dbService();
  }
  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM users;";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async insertNewDetail(email, name, gender, password, confirmpassword) {
    try {
      const dateAdded = new Date();
      const insertId = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO users (email, name, gender, password, confirmpassword, date_added) VALUES (?, ?, ?, ?, ?,?);";

        connection.query(
          query,
          [email, name, gender, password, confirmpassword, dateAdded],
          (err, result) => {
            if (err) reject(new Error(err.message));
            resolve(result.insertId);
            // console.log(err);
          }
        );
      });
      return {
        id: insertId,
        email: email,
        name: name,
        gender: gender,
        password: password,
        confirmpassword: confirmpassword,
        dateAdded: dateAdded,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = dbService;