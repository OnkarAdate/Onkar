const fs= require ('fs');
const http= require('http');

const server = http.createServer();

server.on("request", (req,res) =>
{
    const rstream= fs.createReadStream("info.txt");

    rstream.pipe(res);  // we have written multiple line code for the same in STreaming. 
                        //Pipe is used for the reduse the multiple line program.
}
);

server.listen(8000, "127.0.0.1");
