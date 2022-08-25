const Decks = require('../models/deck')
const decksRouter = require('express').Router()

//Index
decksRouter.get('/', async (req,res) => {
    try {
      res.status(200).json(await Decks.find({}))
    } catch (error) {
      res.status(400).json({ message: "Bad request"})
    }
})

//Create
decksRouter.post('/', async (req,res) => {
    try {
      res.status(200).json(await Decks.create(req.body))
    } catch (error) {
      res.status(400).json({ message: "Bad request"})
    }
})

//Delete
decksRouter.post('/:id', async (req,res) => {
    try {
      res.status(201).json(await Decks.findByIdAndDelete(req.params.id))
    } catch (error) {
      res.status(400).json({ message: "Bad request"})
    }
})

//Update
decksRouter.put('/:id', async (req,res) => {
    try {
      res.status(201).json(await Decks.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        ))
    } catch (error) {
      res.status(400).json({ message: "Bad request"})
    }
})

//Show
decksRouter.get('/:id', async (req,res) => {
    try {
      res.status(201).json(await Decks.findById(req.params.id))
    } catch (error) {
      res.status(400).json({ message: "Bad request"})
    }
})
module.exports = decksRouter