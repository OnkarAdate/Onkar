const http= require('https');
const fs= require('fs');
var requests= require('requests');

const homefile= fs.readFileSync("home.html", "utf-8");

const replaceval =(tempval, orgval) => {

    let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);    
    temperature = temperature.replace("{%location%}", orgval.name);
    temperature = temperature.replace("{%country%}", orgval.sys.country);
    return temperature;
};


const server = http.createServer((req, res) => {

    if(req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f4a7bc96e8d9f1eacb65ae8e783bfa56")

        .on("data", (chunk) => {
            const  objdata = JSON.parse(chunk);
            const arrdata = [objdata];

            const realTimeData= arrdata.map((val)=> replaceval(homefile, val));
            console.log(realTimeData);
        })

        .on("end", (err)=> {
            if(err) return console.log("Error......", err);
            res.end();
        });

    }
});


server.listen(8000, "127.0.0.1");