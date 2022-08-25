const Flashcard = require('../models/flashcard')
const Decks = require('../models/deck')
const flashcardsRouter = require('express').Router()

//Delete


//Update

//Create
flashcardsRouter.post('/:id', async (req,res) => {
  console.log(req.params.id)
    try {
      res.status(200).json(
        await Flashcard.create(req.body)
        .then((flashcard) => {
          return Decks.findByIdAndUpdate(
            req.params.id,
            { $push: {flashcards: flashcard._id} },
            { new: true}
          )
        })
        )
    } catch (error) {
      res.status(400).json({ message: "Bad request"})
    }
})


//Show

module.exports = flashcardsRouter