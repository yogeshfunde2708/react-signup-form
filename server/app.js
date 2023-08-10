const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbService = require("./dbService");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post("/insert", (request, response) => {
    const { email, name, gender, password, confirmpassword } = request.body;
    const db = dbService.getDbServiceInstance();
  
    const result = db.insertNewDetail(
      email,
      name,
      gender,
      password,
      confirmpassword
    );
  
    result
      .then((data) => response.json({ data: data }))
      .catch((err) => console.log(err));
  });

  //read
app.get("/getAll", (request, response) => {
    const db = dbService.getDbServiceInstance();
  
    const result = db.getAllData();
  
    result
      .then((data) => response.json({ data: data }))
      .catch((err) => console.log(err));
  });

app.listen(process.env.PORT, () => console.log("app is running"));