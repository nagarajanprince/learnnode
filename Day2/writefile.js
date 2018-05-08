var fs  = require("fs");

fs.writeFile("write.txt","Hello How are you",(error)=>{
    if(error)
        throw error;

        console.log("Content Write in file successfully !");
});

fs.writeFileSync("write.txt","synchronously using node.js");

console.log("Syn file called ");