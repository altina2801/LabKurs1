const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser=require("body-parser");
const cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crud_register",
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL server:", err);
  } else {
    console.log("Connected to MySQL server.");
  }
  connection.release(); // release the connection back to the pool
});

/*Crud*/
/*Insert */
app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM register_db";
  db.query(sqlGet, (error, result) => {
    // if (error) {
    //   console.error("Error retrieving data from database:", error);
    //   res.status(500).send("Error retrieving data from database.");
    // } else {
    //   console.log("Data retrieved from database:", result);
    //   res.send(result);
    // }
    res.send(result);
  });
});
  
  app.get("/insert", (req, res) => {
    // const { name, email, password } = req.query;
    // const sqlInsert = `INSERT INTO register_db(name, email, password) VALUES('${name}', '${email}', '${password}')`;
    // db.query(sqlInsert, (err, result) => {
    //   if (err) {
    //     console.error("Error inserting data into database:", err);
    //     res.status(500).send("Error inserting data into database.");
    //   } else {
    //     console.log("Data inserted into database:", result);
    //     res.send("Data inserted into database.");
    //   }
    // });
  });
  /*Add User */
  app.post("/api/post",(req,rost)=>{
    const{name,email,password}=req.body;
    const sqlInsert= `INSERT INTO register_db(name, email, password) VALUES(?, ?,? )`;
    db.query(sqlInsert,[name,email,password],(error,result)=>{
      if(error)  {
        console.log(error);
      }
    });
});
app.delete("/api/remove/:id",(req,rost)=>{
  const{id}=req.params;
  const sqlRemove= `DELETE FROM register_db WHERE id=?`;
  db.query(sqlRemove,id,(error,result)=>{
    if(error)  {
      console.log(error);
    }
  });
});
app.get("/api/get/:id", (req, res) => {
  const{}=req.params;
  const sqlGet = "SELECT * FROM register_db where id=?";
  db.query(sqlGet,id (error, result) => {
    // if (error) {
    //   console.error("Error retrieving data from database:", error);
    //   res.status(500).send("Error retrieving data from database.");
    // } else {
    //   console.log("Data retrieved from database:", result);
    //   res.send(result);
    // }
    res.send(result);
  });
});
  
  
  app.listen(5000, () => {
    console.log("Server started on port 5000.");
  });
  


 //app.get("/select",(req,res)=>{
//   const sqlSelect = "SELECT * FROM register_db";
//   db.query(sqlSelect, (err, result) => {
//     if (err) {
//       console.error("Error retrieving data from database:", err);
//       res.status(500).send("Error retrieving data from database.");
//     } else {
//       console.log("Data retrieved from database:", result);
//       res.send("Data retrieved from database.");
//     }
//   });
 //});
