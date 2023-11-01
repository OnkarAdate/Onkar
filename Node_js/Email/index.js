
const express = require('express');
const app = express();

const sendmail= require("./sendmail"); // access of sendmail.js file

app.get( "/", (req, res) =>
{
    res.send("Server is Active...");
});

app.get("/mails", sendmail); //call

const start =async() =>
{
    try{

        app.listen(5000, ()=>
        {
            console.log("Port is active now....");
        });
    } catch{console.error();}

} 
start();
