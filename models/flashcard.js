const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FlashcardSchema = new Schema(
    {
    front: String,
    back: String, 
    deck: {type: Schema.Types.ObjectId, ref: "Deck"},
    },
    { timestamps: true }
    )

const Flashcards = mongoose.model("Flashcards", FlashcardSchema)

module.exports = Flashcards