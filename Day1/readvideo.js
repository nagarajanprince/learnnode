var http = require("http");
var fs = require("fs");

var host ="127.0.0.1";
var port = 3000;

http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type":"video/mp4"});

    fs.exists("Sulekha.mp4",function(exists){
        if(exists){
            var stream = fs.createReadStream("Sulekha.mp4");
            stream.pipe(res);
        }else{
            res.write("Error Video Load !!");
            res.end();
        }
    });
    
}).listen(3000);
