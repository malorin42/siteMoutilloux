const mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'moutilloux'
  })
  
db.connect(function(err){
    if (err) console.log(err)
})


const express = require('express')

// Create express instance
const app = express()

// Require API routes
const test = require('./routes/test')

// Import API Routes
app.use(test)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
