const mymodule = require('./mymodule.js')

const directory = process.argv[2];
const extention = process.argv[3];


mymodule(directory,extention,(err,filtredList)=>{
if (err) return console.error(err);
filtredList.forEach(file=>{
console.log(file);
});
});
