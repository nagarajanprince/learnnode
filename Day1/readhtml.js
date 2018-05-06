var http =  require('http');
var fs = require('fs');
var port = 3000;
var host = "127.0.0.1";

var server = http.createServer((request,response) => {
    response.writeHead(200,{"Content-Type":"text/html"});

    fs.readFile("index.html",(error ,data) => {
        if(error){
            console.log(" Server File Error "+error);
        }
        response.end(data);
    });
});

server.listen(3000);