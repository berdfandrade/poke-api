

import express from 'express';
import PokemonController from '../controller/pokeController';

const router = express.Router() 

router.get('/', PokemonController.getPokemons)

export default router
