const Flashcard = require('../models/flashcard')
const Decks = require('../models/deck')
const flashcardsRouter = require('express').Router()

//Delete
flashcardsRouter.delete('/:id', async (req,res) => {
  //TODO: need to also add in logic that removes the card id from the deck array
  try {
    res.status(200).json(
      await Flashcard.findByIdAndRemove(req.params.id)
      .then((deletedCard) => {
        return Decks.findByIdAndUpdate(
          deletedCard.deck,
          { $pull: { flashcards: deletedCard._id } },
          { new: true }
          )
      })
      )
  } catch (error) {
    res.status(400).json({ message: "Bad request" })
  }
})


//Update
flashcardsRouter.put('/:id', async (req, res) => {
  try {
    res.status(200).json(await Flashcard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ))
  } catch (error) {
    
  }
})

//Create
flashcardsRouter.post('/:id', async (req,res) => {
  console.log(req.params.id)
    try {
      res.status(200).json(
        await Flashcard.create(
          { front: req.body.front , 
            back: req.body.back , 
            deck: req.params.id
          }
          )
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

flashcardsRouter.get('/:id', async (req, res) => {
  try {
    res.status(200).json(await Flashcard.findById(req.params.id))
  } catch (error) {
    res.status(400).json( { message: "Bad request" })
  }
})

module.exports = flashcardsRouter