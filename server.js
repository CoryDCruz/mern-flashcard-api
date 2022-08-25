require("dotenv").config()
const cors = require("cors")
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const deckRouter = require('./controllers/decks')
const flashcardRouter = require('./controllers/flashcards')
const { PORT, DATABASE_URL } = process.env
const app = express()

mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

mongoose.connection
  .on("open", () => {console.log("Connected to Mongoose")})
  .on("close", () => {console.log("Disconnected to Mongoose")})
  .on("error", (error) => {console.log(error)})

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get('/', (req,res) => {
  res.send("Welcome to the Flashcard API")
})

app.use('/api/decks', deckRouter)
app.use('/api/decks/:id', flashcardRouter)

app.listen(PORT, () => {
  console.log("Running on: " + PORT)
})