const http = require('http');
const fs = require("fs");

const server = http.createServer((req,res) => {

    if (req.url == "/home")
    {res.end('This is Home ...');}
    else if (req.url == "/info")
    {

        fs.readFile("D:/Onkar/API/input.txt","utf-8",(err, data) =>
        { 
            console.log(data);
        res.end(data);
        }
        );

    }
     else      
    {res.end('Error...');}
    
    
});

server.listen(8000, "127.0.0.1", ()=> {console.log("Port is active...")});

