const express = require('express');
const mysql = require('mysql');
const app=express();

const connection=mysql.createConnection({

    host: '3306',
    user: 'root',
    password: 'Labkurs1.',
    database: 'master'
  });

  connection.connect((err) => {
    if(err)throw err;
    console.log('Connected to MySQL database');
  });