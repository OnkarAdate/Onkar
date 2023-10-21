const http = require('http');

const server  = http.createServer((req, res) => {
    if(req.url=="/")
    {
    res.end("Hellow this is OutPut");
    }
    else if(req.url == "/aboutus")
    {
        res.end("This is AboutUs Page ");
    }
    else
    {
        res.writeHead(404, {"Content-type" : "text/html"}); // This is for proper show error on console of chrom
        res.end("404 Error.. !!! Page is not exist...")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log(" Port is Active... ");
});
