const express= require('express');
const path= require('path');
const app= express();

//const staticpath= path.join("D:/Onkar/Express_js/Middleway/css");
const staticpath= path.join(__dirname,  "../middleway/css");
console.log(staticpath);
app.use(express.static(staticpath));

app.get("/home", ( req,res)=>
{
    res.send("This is Home page");
});

app.listen(8000,()=>
{
    console.log("Port 8000 is active");
});