// declare package we install
const express = require('express');
const cors = require ('cors');
// build our express connection
const app = express()
const PORT = 8000;
const DB = "authors_db"

// Middleware for back to front
app.use(cors(), express.json(),express.urlencoded({extended: true}))
// import the mongoose db config
require('./config/mongoose.config')(DB)

// import the route after create model, controller, and route
require('./routes/author.route')(app)

// run the app
app.listen(PORT, () => {
    console.log(`server up on port: ${PORT}`)
})