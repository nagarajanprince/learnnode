var http = require("http");
var port = 3000;
var host = "127.0.0.1";

var server = http.createServer((require,responce) =>{
    responce.writeHead(200,{"Content-Type":"text/plain"});
    responce.write("Server Write content");
    responce.end("Server Run Successfully");
});

server.listen(port,host,(error) => {
    if(error){
        console.log("Browser below error"+error);
    }

    console.log("Browser open below "+host+":"+port);
});