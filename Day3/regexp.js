var fs = require('fs');
var str = fs.readFileSync("data.txt").toString();
var pattern = /man/gim;
var result = str.match( pattern );
console.log("Occurrences of pattern in the string is : " + result.length);