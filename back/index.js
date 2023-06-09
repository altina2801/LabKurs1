const express=require("express");
const app=express();
const mysql=require("mysql");
const bodyParser=require("body-parser");
const cors=require("cors");
const session = require('express-session');

const cookieParser =require('cookie-parser');
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"crud_contact",
});
app.use(cors({
  origin:["http://localhost:3000"],
  methods:["POST","GET"],
  credentials:true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  secret: 'secret', // a secret key used to encrypt the session cookie
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  } // set the session cookie properties
}));

/* Qikjo eshte krejt pjesa per me i shti te dhenat prej register*/
//I merr te gjitha the dhenat qe i kena shti ne databaze dhe i qet dashboard
app.get("/api/get",(req,res)=>{
    const sqlGet="SELECT * FROM contact_db";
    db.query(sqlGet,(error,result)=>{
     res.send(result);
    })
})


//Te qikjo mundemi psh si te shembulli me i dergu tedhena
//app.get("/",(req,res)=>{
    // const sqlInsert="INSERT INTO contact_db(name,email,password) VALUES ('tini','tini@gmail.com','tini123')";
    // db.query(sqlInsert,(err,result)=>{
    //  console.log("error",err);
    //  console.log("result",result);
    //  res.send("Hello Express");
    // })
    
//});
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
  app.get("/api/get/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM contact_db WHERE id = ?";
    
    db.query(sqlGet, id, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to fetch user data' });
      } else {
        const userData = result[0]; // Assuming there's only one user with the given ID
        res.status(200).json(userData);
      }
    });
  });
  

//Update
app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password, date_of_birth, phone_number, address } = req.body;
  const sqlUpdate = "UPDATE contact_db SET name=?, email=?, password=?, date_of_birth=?, phone_number=?, address=? WHERE id=?";
  
  db.query(sqlUpdate, [name, email, password, date_of_birth, phone_number, address, id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while updating the user profile." });
    } else {
      res.status(200).json({ message: "User profile updated successfully." });
    }
  });
});


/*Me i insert te dhenat ne db prej register*/
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  const sql = "SELECT * FROM contact_db WHERE email = ?";
  
  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.json({ Message: "Error inside server" });
    }

    if (result.length > 0) {
      return res.json({ Message: "Email already exists" });
    }
    
    // If the email doesn't exist, proceed with user registration
    const sqlInsert = 'INSERT INTO contact_db (name, email, password) VALUES (?, ?, ?)';
    db.query(sqlInsert, [name, email, password], (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to register user' });
      } else {
        const insertId = result.insertId; // Retrieve the insertId from the result
        return res.status(200).json({ message: 'User registered successfully', insertId });
      }
    });
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

// GET endpoint to fetch a session by ID
app.get("/api/session/edit/:session_id", (req, res) => {
  const { session_id } = req.params;
  const sqlGet = "SELECT * FROM session_db WHERE session_id=?";
  db.query(sqlGet, session_id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send("An error occurred while fetching the session.");
    } else {
      res.send(result);
    }
  });
});

// PUT endpoint to update a session by ID
app.put("/api/session/update/:session_id", (req, res) => {
  const { session_id } = req.params;
  const { professional_id, user_id, appointment_id, session_date, session_notes, session_rating } = req.body;
  const sqlUpdate = "UPDATE session_db SET professional_id=?, user_id=?, appointment_id=?, session_date=?, session_notes=?, session_rating=? WHERE session_id=?";

  db.query(sqlUpdate, [professional_id, user_id, appointment_id, session_date, session_notes, session_rating, session_id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send("An error occurred while updating the session.");
    } else {
      res.send("Session updated successfully.");
    }
  });
});



// Delete a session
app.delete("/api/delete/sessions/:session_id", (req, res) => {
  const session_id = req.params.session_id;
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
/*Tash Crud per Therapist*/
/* Get therapists */
app.get("/api/therapists", (req, res) => {
  const sqlGet = "SELECT * FROM professionals_db WHERE profession_type = 'therapist'";

  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while retrieving therapists." });
    } else {
      res.send(result);
    }
  });
});

app.post("/api/therapists", (req, res) => {
  const {
    name,
    email,
    password,
    date_of_birth,
    gender,
    resume,
    certifications,
    profession_type,
    confirm_password,
    skills,
    specializations,
    description,
  } = req.body;

  const checkEmailQuery = "SELECT * FROM professionals_db WHERE email = ?";
  const insertTherapistQuery =
    "INSERT INTO professionals_db (name, email, password, date_of_birth, gender, resume, certifications, profession_type, confirm_password, skills, specializations, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(checkEmailQuery, [email], (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "An error occurred while checking the email." });
    }

    if (result.length > 0) {
      return res.status(409).json({ message: "Email already exists." });
    }

    db.query(
      insertTherapistQuery,
      [
        name,
        email,
        password,
        date_of_birth,
        gender,
        resume,
        certifications,
        profession_type,
        confirm_password,
        skills,
        specializations,
        description,
      ],
      (error, result) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "An error occurred while adding the therapist." });
        }
        res.status(201).json({ message: "Therapist added successfully." });
      }
    );
  });
});

/* Delete therapist */
app.delete("/api/therapists/:professionals_id", (req, res) => {
  const { professionals_id } = req.params;
  const sqlDelete = "DELETE FROM professionals_db WHERE professionals_id = ?";

  db.query(sqlDelete, professionals_id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while deleting the therapist." });
    } else {
      res.status(200).json({ message: "Therapist deleted successfully." });
    }
  });
});

/* Get therapist by ID */
app.get("/api/therapists/:professionals_id", (req, res) => {
  const { professionals_id } = req.params;
  const sqlGet = "SELECT * FROM professionals_db WHERE professionals_id = ?";

  db.query(sqlGet, professionals_id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while retrieving the therapist." });
    } else {
      res.send(result);
    }
  });
});

/* Update therapist */
app.put("/api/therapists/:professionals_id", (req, res) => {
  const { professionals_id } = req.params;
  const { name, email, password, date_of_birth, gender, resume, certifications, profession_type, image, confirm_password, skills, specializations, cv, about, description } = req.body;
  const sqlUpdate =
    "UPDATE professionals_db SET name = ?, email = ?, password = ?, date_of_birth = ?, gender = ?, resume = ?, certifications = ?, profession_type = ?, image = ?, confirm_password = ?, skills = ?, specializations = ?, cv = ?, about = ?, description = ? WHERE professionals_id = ?";

  db.query(
    sqlUpdate,
    [name, email, password, date_of_birth, gender, resume, certifications, profession_type, image, confirm_password, skills, specializations, cv, about, description, professionals_id],
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while updating the therapist." });
      } else {
        res.status(200).json({ message: "Therapist updated successfully." });
      }
    }
  );
});


/*Payment */
//Create
app.post("/api/payments", (req, res) => {
  const { id, professionals_id, amount, payment_date, payment_status } = req.body;
  const sqlInsert = "INSERT INTO payments_db (id, professionals_id, amount, payment_date, payment_status) VALUES (?, ?, ?, ?, ?)";

  db.query(sqlInsert, [id, professionals_id, amount, payment_date, payment_status], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while adding the payment." });
    } else {
      res.status(201).json({ message: "Payment added successfully." });
    }
  });
});
//Read 
app.get("/api/payments", (req, res) => {
  const sqlSelect = "SELECT * FROM payments_db";
  db.query(sqlSelect, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while retrieving payments." });
    } else {
      res.send(result);
    }
  });
});
//Update
app.put("/api/payments/:payment_id", (req, res) => {
  const { payment_id } = req.params;
  const { id, professionals_id, amount, payment_date, payment_status } = req.body;
  const sqlUpdate = "UPDATE payments_db SET id=?, professionals_id=?, amount=?, payment_date=?, payment_status=? WHERE payment_id=?";

  db.query(sqlUpdate, [id, professionals_id, amount, payment_date, payment_status, payment_id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while updating the payment." });
    } else {
      res.status(200).json({ message: "Payment updated successfully." });
    }
  });
});

// Edit Payment
app.put("/api/payment/edit/:payment_id", (req, res) => {
  const { payment_id } = req.params;
  const { id, professionals_id, amount, payment_date, payment_status } = req.body;
  const sqlUpdate =
    "UPDATE payments_db SET id=?, professionals_id=?, amount=?, payment_date=?, payment_status=? WHERE payment_id=?";

  db.query(sqlUpdate, [id, professionals_id, amount, payment_date, payment_status, payment_id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while updating the payment." });
    } else {
      res.status(200).json({ message: "Payment updated successfully." });
    }
  });
});

//Delete
app.delete("/api/payments/:payment_id", (req, res) => {
  const { payment_id } = req.params;
  const sqlDelete = "DELETE FROM payments_db WHERE payment_id = ?";

  db.query(sqlDelete, payment_id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while deleting the payment." });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Payment not found." });
      } else {
        res.status(200).json({ message: "Payment deleted successfully." });
      }
    }
  });
});
//------------------------------Sessions & cookies
app.get('/',(req,res)=>{
  if(req.session.name){
    return res.json({valid:true,username:req.session.name})
    
  }else{
    return res.json({valid:false})
  }
})

/*Qito kom mujt edhe direkt te add useri po nfillim sma ka rrok qaq e kom vazhdu qishtu */
//added authentication to login functionality
app.post('/user/login',(req,res)=>{
  const sql="SELECT * from contact_db WHERE email = ? AND password = ?";
  db.query(sql,[req.body.email,req.body.password],(err,result)=>{
    if(err) return res.json({Message:"Error inside server"});
    if(result.length>0){
      req.session.name=result[0].name;
     // console.log(req.session.name);

      return res.json({Login:true})
    }else{
      return res.json({Login:false})
    }
    
  })
})

app.post('/professional/login', (req, res) => {
  const sql = "SELECT * FROM professionals_db WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      return res.json({ Message: "Error inside server" });
    }
    if (result.length > 0) {
      return res.json({ Login: true });
    } else {
      return res.json({ Login: false });
    }
  });
})



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
