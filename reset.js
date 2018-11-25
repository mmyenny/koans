const fs = require('fs')

console.log(Buffer.from(fs.readFileSync('.koans.uue').toString(), 'base64').toString(`binary`))
