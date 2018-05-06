var http = require("http");
var port = 3000;
var host = '127.0.0.1';

var server = http.createServer((request,response) =>{
    response.writeHead(200,{"Content-Type":"text/plain"});
    console.log("Server Working");
    response.end("Server Working Success");
});

server.listen(port,host,(error) =>{
    if(error){
        return console.log('Error occured : ', error );
    }

    console.log('server is listening on ' + host + ':'+ port);
});