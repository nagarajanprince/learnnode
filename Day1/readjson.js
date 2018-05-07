var http = require('http');

var port = 3000;
var host = "127.0.0.1";

var server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-type":"application/json"});

    let jsonresponse={
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ]		
    };

    res.end(JSON.stringify(jsonresponse));
});
server.listen(3000);

