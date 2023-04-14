import express from "express";
import { addPokemon, deletePokemon, getPokemon, getPokemons, updatePokemon } from "../controllers/pokemons.js";

const router = express.Router()

router.get('/', getPokemons);
router.get('/:id', getPokemon);
router.post('/add', addPokemon);
router.patch('/update/:id', updatePokemon);
router.delete('/delete/:id', deletePokemon);

export default router;