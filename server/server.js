// Purpose?
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const igAccountRoutes = require('./routes/igAccount')

// Express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/igAccount', igAccountRoutes)

//Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')

    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(`Error is: ${error}`)
  })
