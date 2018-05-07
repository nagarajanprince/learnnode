var http = require('http');
var fs = require('fs');

var host = "127.0.0.1";
var port =3000;

http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"audio/mp3"});

    fs.exists("Shape-Of-You.mp3",function(exists){
        if(exists){
            var stream = fs.createReadStream("Shape-Of-You.mp3");
            stream.pipe(res);
        }else{
            res.write(" Error Please Check");
            res.end();
        }
    });
}).listen(3000);