const mongoose = require('mongoose')
const Flashcards = require('./flashcard')
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

DeckSchema.pre("findOneAndDelete", async function(next) {
  const deckId = this._conditions._id
  console.log(deckId)
  await Flashcards.deleteMany({ deck: deckId })
  next()
})

const Decks = mongoose.model("Decks", DeckSchema)

module.exports = Decks