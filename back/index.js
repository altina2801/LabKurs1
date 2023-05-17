const express=require("express");
const app=express();
const mysql=require("mysql");
const bodyParser=require("body-parser");
const cors=require("cors");
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"crud_contact",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
/* Qikjo eshte krejt pjesa per me i shti te dhenat prej register*/
//I merr te gjitha the dhenat qe i kena shti ne databaze dhe i qet dashboard
app.get("/api/get",(req,res)=>{
    const sqlGet="SELECT * FROM contact_db";
    db.query(sqlGet,(error,result)=>{
     res.send(result);
    })
})
//Te qikjo mundemi psh si te shembulli me i dergu tedhena
app.get("/",(req,res)=>{
    // const sqlInsert="INSERT INTO contact_db(name,email,password) VALUES ('tini','tini@gmail.com','tini123')";
    // db.query(sqlInsert,(err,result)=>{
    //  console.log("error",err);
    //  console.log("result",result);
    //  res.send("Hello Express");
    // })
    
});
/*Add User */
app.post("/api/post",(req,res)=>{
    const{name,email,password}=req.body;
    const sqlInsert="INSERT INTO contact_db(name,email,password) VALUES (?,?,?)";
 /* Egzekutimi i query*/
 db.query(sqlInsert,[name,email,password],(error,result)=>{
    if(error){
        console.log(error);
    }
 })  
})

/* Delete User*/
app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM contact_db WHERE id=? ";
  
    db.query(sqlRemove, id, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while deleting the contact." });
      } else {
        res.status(200).json({ message: "Contact deleted successfully." });
      }
    });
  });
  //Edit
  app.get("/api/get/:id",(req,res)=>{
    const{id}=req.params;
    const sqlGet="SELECT * FROM contact_db WHERE id=?";
    db.query(sqlGet,id,(error,result)=>{
        if(error){
            console.log(error);
        }
     res.send(result);
    })
})
//Update
app.put("/api/update/:id",(req,res)=>{
    const{id}=req.params;
    const{name,email,password}=req.body;
    const sqlUpdate="UPDATE contact_db SET name=?,email=?,password=? WHERE id=?";
    db.query(sqlUpdate,[name,email,password,id],(error,result)=>{
        if(error){
            console.log(error);
        }
     res.send(result);
    })
})
/*Me i insert te dhenat ne db prej register*/
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
  
    db.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to register user' });
      } else {
        const sql = `INSERT INTO contact_db (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
  
        connection.query(sql, (err, result) => {
          connection.release(); 
          if (err) {
            console.log(err);
            res.status(500).json({ message: 'Failed to register user' });
          } else {
            console.log(result);
            res.status(200).json({ message: 'User registered successfully' });
          }
        });
      }
    });
  });
  /*Deri qitu */
  /*Sessions */
  //Get all sessions 
  app.get("/api/sessions", (req, res) => {
    const sqlGet = "SELECT * FROM session_db";
    db.query(sqlGet, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while retrieving sessions." });
      } else {
        res.send(result);
      }
    });
  });
  // Create a new session
app.post("/api/sessions", (req, res) => {
  const { session_name, start_time, end_time, location, speaker } = req.body;
  const sqlInsert =
    "INSERT INTO session_db (session_name, start_time, end_time, location, speaker) VALUES (?, ?, ?, ?, ?)";
  db.query(sqlInsert, [session_name, start_time, end_time, location, speaker], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while creating a session." });
    } else {
      res.status(200).json({ message: "Session created successfully." });
    }
  });
});

// Delete a session
app.delete("/api/sessions/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM session_db WHERE id=?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while deleting the session." });
    } else {
      res.status(200).json({ message: "Session deleted successfully." });
    }
  });
});

// Update a session
app.put("/api/sessions/:id", (req, res) => {
  const { id } = req.params;
  const { session_name, start_time, end_time, location, speaker } = req.body;
  const sqlUpdate =
    "UPDATE session_db SET session_name=?, start_time=?, end_time=?, location=?, speaker=? WHERE id=?";
  db.query(sqlUpdate, [session_name, start_time, end_time, location, speaker, id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while updating the session." });
    } else {
      res.status(200).json({ message: "Session updated successfully." });
    }
  });
});
/*Deri qitu */


db.getConnection((err,connection)=>{
    if(err){
        console.error("Error connecting to MYSQL server:",err);
    }else{
        console.log("Connected to MYSQL server.");
    }
    connection.release();
})


app.listen(5000,()=>{
    console.log("Server started on port 5000");
})
