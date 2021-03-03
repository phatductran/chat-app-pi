const mongoose = require('mongoose')

const DB_URI = process.env.DB_URI || 'mongodb://localhost/chat-app-pi-test'

module.exports = async function () {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  } catch (error) {
    console.log(error)
  }
}