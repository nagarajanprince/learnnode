var http = require('http');
var fs = require('fs');

var host = "127.0.0.1";
var port = 3000;

http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type":"application/pdf"});

    fs.readFile("angular4_tutorial.pdf",(error,data) =>{
        if(error){
            res.json({"status":"error",msg:error});
        }else{
            res.end(data);
        }
    });
}).listen(3000);