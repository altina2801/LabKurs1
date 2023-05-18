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
// Create a session
app.post("/api/sessions", (req, res) => {
  const { professional_id, user_id, appointment_id, session_date, session_notes, session_rating } = req.body;
  const sqlInsert = "INSERT INTO session_db (professional_id, user_id, appointment_id, session_date, session_notes, session_rating) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [professional_id, user_id, appointment_id, session_date, session_notes, session_rating],
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while creating a session." });
      } else {
        res.status(201).json({ message: "Session created successfully." });
      }
    }
  );
});

// Read all sessions
app.get("/api/sessions", (req, res) => {
  const sqlSelect = "SELECT * FROM session_db";
  db.query(sqlSelect, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while retrieving sessions." });
    } else {
      res.send(result);
    }
  });
});

// Read a session by ID
app.get("/api/sessions/:id", (req, res) => {
  const session_id = req.params.id;
  const sqlSelect = "SELECT * FROM session_db WHERE session_id = ?";
  db.query(sqlSelect, session_id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while retrieving the session." });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: "Session not found." });
      } else {
        res.send(result[0]);
      }
    }
  });
});
// Edit/Update a session
app.put("/api/sessions/:id", (req, res) => {
  const session_id = req.params.id; // Update variable name to session_id
  const { professional_id, user_id, appointment_id, session_date, session_notes, session_rating } = req.body;
  const sqlUpdate = "UPDATE session_db SET professional_id = ?, user_id = ?, appointment_id = ?, session_date = ?, session_notes = ?, session_rating = ? WHERE session_id = ?";
  db.query(
    sqlUpdate,
    [professional_id, user_id, appointment_id, session_date, session_notes, session_rating, session_id], // Use session_id variable
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while updating the session." });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ message: "Session not found." });
        } else {
          res.status(200).json({ message: "Session updated successfully." });
        }
      }
    }
  );
});



// Delete a session
app.delete("/api/sessions/:id", (req, res) => {
  const session_id = req.params.id;
  const sqlDelete = "DELETE FROM session_db WHERE session_id = ?";
  db.query(sqlDelete, session_id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while deleting the session." });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Session not found." });
      } else {
        res.status(200).json({ message: "Session deleted successfully." });
      }
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
