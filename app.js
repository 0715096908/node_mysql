//This code demonstates the use of node js with mysql database.
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

//create table
app.get('/createblogtable', (req, res) => {
    let sql = 'CREATE TABLE blog(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id) )';
    db.query(sql,(err,result)=> {
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('Blog table created');
    });
});

//insert blog 1
app.get('/addblog1', (req, res)=> {
    let blog = {title: 'blog one', body:'This is my first blog'};
    let sql = 'INSERT INTO blog SET ?';
    let query = db.query(sql,blog, (err,result)=>{
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('blog 1 inserted successfully');
    });
});
//add blog 2
app.get('/addblog2', (req, res)=> {
    let blog = {title: 'blog one', body:'This is my second blog'};
    let sql = 'INSERT INTO blog SET ?';
    let query = db.query(sql,blog, (err,result)=>{
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('blog 2 inserted successfully');
    });
});
//select blog
app.get('/selectblog', (req,res) => {
    let sql = 'SELECT * FROM blog';
    db.query(sql,(err,result)=>{
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('Blog fetched successfully');
    })
});
 //select single blog
 app.get('/getblog/:id', (req,res) => {
    let sql = 'SELECT * FROM blog WHERE id = ${req.params.id}';
    db.query(sql,(err,result)=>{
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('Blog fetched');
    })
});
//Update blog
app.get('/updateblog/:id', (req,res) => {
    let newTitle ='Updated Blog';
    let sql = 'UPDATE blog SET title = ${newTitle} WHERE id = ${req.params.id}';
    db.query(sql,(err,result)=>{
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('Blog updated');
    })
});
//delete from blog
app.get('/deleteblog/:id', (req,res) => {
    let sql = 'DELETE FROM blog WHERE id = ${req.params.id}';
    db.query(sql,(err,result)=>{
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('Blog Deleted');
    })
});
app.listen('3000', () => { console.log('Server started on port 3000');
});  

