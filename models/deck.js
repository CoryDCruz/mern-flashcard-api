const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeckSchema = new Schema(
  {
    name: String,
    icon: {
      type: String, 
      default: "https://cdn-icons-png.flaticon.com/512/7177/7177996.png"
    },
    flashcards: [{ type: Schema.Types.ObjectId, ref: "Flashcard" }],
  }, 
  { timestamps: true }
)

const Deck = mongoose.model("Deck", DeckSchema)

module.exports = Deck