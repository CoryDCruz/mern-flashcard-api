const Deck = require('../models/deck')
const decksRouter = require('express').Router()

//Index
decksRouter.get('/', async (req,res) => {
    res.send("This is where you will see flashcard Decks")
})

//Create
decksRouter.post('/', (req,res) => {

})

//Delete
decksRouter.post('/:id', async (req,res) => {
    //TODO: Mongoose db call to delete a deck of flashcards
})

//Update
decksRouter.put('/:id', async (req,res) => {
    //TODO: Mongoose db call to update a deck
})

//Show
decksRouter.get('/:id', async (req,res) => {
    res.send("This is where a user will be shown the first card")
})
module.exports = decksRouter