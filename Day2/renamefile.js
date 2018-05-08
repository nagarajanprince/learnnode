var fs = require('fs');

fs.rename('writefile.txt','writedata.txt',(err)=>{
    if(err)
    throw err;
});

fs.renameSync('writedata.txt','writefile.txt');