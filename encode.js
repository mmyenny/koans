const fs = require('fs')

console.log(Buffer.from(fs.readFileSync('koans.js')).toString('base64'))
