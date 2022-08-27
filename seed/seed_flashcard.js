const { default: mongoose } = require('mongoose')
const Flashcard = require('../models/flashcard')
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

const seedFlashcards = [
  {
    front: "question 1",
    back: "answer",
    deck: '630a86b1c9c6ffff516352ae'
  },
  {
    front: "question 2",
    back: "answer",
    deck: '630a86b1c9c6ffff516352ae'
  },
  {
    front: "question 3",
    back: "answer",
    deck: '630a86b1c9c6ffff516352ae'
  },
  {
    front: "question 1",
    back: "answer",
    deck: '630a86b1c9c6ffff516352af'
  },
  {
    front: "question 2",
    back: "answer",
    deck: '630a86b1c9c6ffff516352af'
  },
  {
    front: "question 3",
    back: "answer",
    deck: '630a86b1c9c6ffff516352af'
  },
  {
    front: "question 1",
    back: "answer",
    deck: '630a86b1c9c6ffff516352b0'
  },
  {
    front: "question 2",
    back: "answer",
    deck: '630a86b1c9c6ffff516352b0'
  },
  {
    front: "question 3",
    back: "answer",
    deck: '630a86b1c9c6ffff516352b0'
  },
  {
    front: "question 1",
    back: "answer",
    deck: '630a86b1c9c6ffff516352b1'
  },
  {
    front: "question 2",
    back: "answer",
    deck: '630a86b1c9c6ffff516352b1'
  },
  {
    front: "question 3",
    back: "answer",
    deck: '630a86b1c9c6ffff516352b1'
  }
]

const seedDB = async () => {
  await Flashcard.deleteMany({})
  await Flashcard.insertMany(seedFlashcards).then((flashcards) => {
    flashcards.forEach(flashcard => {
      console.log(flashcard.deck)
    return Deck.findByIdAndUpdate(
      flashcard.deck.str,
      { $push: {flashcards: flashcard._id} },
      { new: true }
    )
    })
    }
  )
}

seedDB().then(() => {
  mongoose.connection.close()
})
