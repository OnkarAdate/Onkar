const http= require('https');
const fs= require('fs');
var requests= require("requests");

const home = fs.readFileSync( 'home.html', "utf-8");

const replaceval =(tempVal, orgVal) => {

    let temperature = tempVal.replace("{%tempVal%}",orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}",orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}",orgVal.main.temp_max);    
    temperature = temperature.replace("{%location%}",orgVal.name);
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    return temperature;
};


const server = http.createServer((req, res) => {

    if( req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f4a7bc96e8d9f1eacb65ae8e783bfa56")

        .on("data", (chunk) => {
            const  objdata = JSON.parse(chunk);
            const arrdata = [objdata];
            
            const realTimeData= arrdata
            .map((val)=> replaceval(home, val))
            .join("");
            res.write(realTimeData);
            console.log(realTimeData);
        })

        .on("end", (err)=> {
            if(err) return console.log("Error......", err);
            res.end()
        });

    }
});


//server.listen(8000, "127.0.0.1");

server.listen(8000, "127.0.0.1", () => {
    console.log(" Port is Active... ");
});
