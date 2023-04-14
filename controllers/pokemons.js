import mongoose from "mongoose";
import Pokemon from "../models/pokemon.js";


export const getPokemons = (req, res) => {
  Pokemon.find().then((pokemons) => {
    res.status(200).json( pokemons )
  })
    .catch((err) => {
      res.status(404).json({ message: err.message })
    })
}

export const getPokemon = (req, res) => {
  const { id: _id } = req.params
  console.log(_id)
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ messag: `No Pokemon with id ${_id}` })
  Pokemon.findById(_id).then((poky) => {
    console.log(res)
    res.status(200).json( poky )
  })
    .catch((err) => {
      res.status(404).json({ message: err.message })
    })
}

export const addPokemon = (req, res) => {
  const poky = req.body
  console.log(poky)
  const newPoky = new Pokemon({ ...poky, created: new Date()?.toISOString() })
  newPoky.save().then((resp) => {
    res.status(201).json({ data: newPoky })
  })
    .catch((err) => {
      res.status(409).json({ message: err.message })
    })
}

export const updatePokemon = (req, res) => {
  const { id: _id } = req.params
  const poky = req.body
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ messag: `No Pokemon with id ${_id}` })
  Pokemon.findByIdAndUpdate(_id, poky, { new: true })
    .then((poky) => res?.status(200).json(poky))
    .catch((err) => res?.status(500).json('Somthing went wrong, when trying to update Pokemon'))
}

export const deletePokemon = (req, res) => {
  const { id: _id } = req?.params
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ messag: `No Pokemon with id ${_id}` })
  Pokemon.findByIdAndDelete(_id)
    .then((response) => res?.status(200).json({ message: `Pokemon with id ${_id} has been deleted.` }))
}