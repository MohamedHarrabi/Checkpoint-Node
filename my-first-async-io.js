const fs = require('fs')
const data = process.argv[2]

fs.readFile(data,'utf8', function (err, contents) {
  if (err) {
    return console.log(err)
  }
   const ch = contents.toString().split('\n').length - 1
  console.log(ch)
})
