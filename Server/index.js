const http = require('http');

const server  = http.createServer((req, res) => {
    res.end("Hellow this is OutPut");
});

server.listen(8000, "127.0.0.1", () => {
    console.log(" Port is Active... ");
});

//to see output --- open chrom and serach localhost:8000