const express = require("express")
const app = express()
const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "altina",
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server:', err);
    } else {
        console.log('Connected to MySQL server.');
    }
});



//app.use(express.static(dirname));

// app.get("/*", (req, res) => {
//     res.sendFile(path.resolve(dirname, '../client/build', 'index.html'));
// })

app.listen(5000, () => {
    console.log("server started on port 5000")
})
