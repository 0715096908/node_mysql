const express = require('express');
const mysql = require('mysql');

const app = express();

//create Database
app.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql,(err,result)=>{
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('Database Created Successfully');
    })
});

//create a connection variable
const db = mysql.createConnection({host: 'localhost', user : 'root', password : '', database : 'nodemysql'});
db.connect((err)=> {
    if(err)
    {
       throw err;
    }
    console.log('Mysql connected');
});
app.listen('3000', () => { console.log('Server started on port 3000');
});  

