import mongoose from "mongoose";

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hp: {
    type: Number,
    required: true
  },
  cp: { type: Number, required: true },
  picture: { type: String, required: true },
  types: {type: [String], required: true},
  rarete: {
    type: String,
    required: true,
    default: '*'
  },
  created: {
    type: Date,
    default: new Date()
  }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

export default Pokemon;