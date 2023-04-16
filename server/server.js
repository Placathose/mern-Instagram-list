// Purpose?
require('dotenv').config()

const express = require('express')
const igAccountRoutes = require('./routes/igAccount')

// Express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/igAccount', igAccountRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})