const fs = require('fs');
const http = require('http');  // both file access

const server = http.createServer();   //server Creation

server.on("request", (req, res) =>    //request to sever 
{
    const rstream = fs.createReadStream("input.txt");  // Data reading from the file. By using readeble stream.

    
    rstream.on("data", (info)=>
    {
        res.write(info);   // Data write OR showing.
    });

    rstream.on("end", ()=>
    {

        res.end();  // End the program if data writing is end.
     });

     rstream.on("error", (err)=>   // For any Error
     {
          console.log(err);
          res.end("File not Found...");
     }
     );

}
);


server.listen(8000, "127.0.0.1");   // listening