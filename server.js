 const express = require('express')
 const serveStatic = require('serve-static')
 const patch= require('path')
 const app = express()

 app.use('/', serveStatic(path.join(__dirname,'/dist')))

 const port = process.env.PORT || 8080
 app.listed(port)

 console.log('Listening on port:' + port)

 