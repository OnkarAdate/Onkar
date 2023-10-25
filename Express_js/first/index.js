const express = require("express");
const app= express();

app.get("/home", (req, res)=>
{
    res.send("This is home page...About us page is available");
}
);

app.get("/about", (req, res)=>
{
    res.send("This is About us page.");    
}
);

app.listen(8000,()=>
{
    console.log("Port is active...");
});

// 1st need to install Express
// Here we no need to if else condition like routing on NODE.