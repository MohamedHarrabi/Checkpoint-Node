const fs = require('fs')

const read_file = fs.readFileSync(process.argv[2],'utf8',)
const ch = read_file.toString().split('\n').length - 1
console.log(ch)