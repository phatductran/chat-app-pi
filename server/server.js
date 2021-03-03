require('dotenv').config({path: './config/config.env'})
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')

connectDB()

app.use(express.json())
app.use(cors())

app.get('/', (req, res, next) => {
  res.send('Hello world')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})