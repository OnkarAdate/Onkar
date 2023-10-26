const express= require("express");
const app= express();

app.get("/home", (req, res)=>
{
    res.send("This is home page");
});

app.get("/info", (req, res)=>
{
    res.json([
        {
            id:1,
            name: "Onkar Adate",
        },
        {
            id:1,
            name: "Onkar Adate",
        },
    ]);
});


app.get("/About", (req, res)=>
{
    res.send("<h2>This is About page</h2>");// HTML
    
});

app.listen(8000,()=>
{
    console.log("Port is Active.....");
}
);