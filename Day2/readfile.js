var fs = require('fs');

fs.readFile("read.txt",(error,data)=>{
    if(error)
     throw error;

     console.log("Content : "+data);

});


var content = fs.readFileSync("read.txt");
console.log("Content : "+content);