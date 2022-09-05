const { default: mongoose } = require('mongoose')
const Deck = require('../models/deck')
require('dotenv').config()

const { DATABASE_URL } = process.env

mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

mongoose.connection
  .on("open", () => {console.log("Connected to Mongoose")})
  .on("close", () => {console.log("Disconnected to Mongoose")})
  .on("error", (error) => {console.log(error)})

const seedDecks = [
  {
    name: 'React'
  },
  {
    name: 'Javascript'
  },
  {
    name: 'Ruby'
  }, 
  {
    name: 'Rails'
  }
]

const seedDB = async () => {
  await Deck.deleteMany({})
  await Deck.insertMany(seedDecks)
}

seedDB().then(() => {
  mongoose.connection.close()
})
