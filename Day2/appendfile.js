var fs = require('fs');

fs.appendFile("write.txt","Oiii 6667",(error)=>{
    if(error)
    throw error    
});


fs.appendFileSync("write.txt","Data Called");