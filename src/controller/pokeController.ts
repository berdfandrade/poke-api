
import { Request, Response } from 'express';
import Pokemon from '../models/pokeModel';

export default class PokemonController {

  static getPokemons(req: Request, res: Response) {
    Pokemon.find()
      .then((pokemons) => {
        res.status(200).json(pokemons);
      })
      .catch((error) => {
        console.error('Erro ao buscar os pokémons:', error);
        res.status(500).json({ error: 'Erro ao buscar os pokémons' });
      });
  }

  static getAPokemon(req: Request, res: Response) {
    const pokemonName = req.params.pokemon;

    if(!pokemonName){
      res.status(400).json({message : "Coloque o nome do pokémon!"})
    }
    
    const regex = new RegExp(pokemonName, 'i');
  
    Pokemon.findOne({ Names: regex })
      .then((pokemon) => {

        if (pokemon) {
          res.status(200).json(pokemon);
        } else {
          res.status(404).json({ error: 'Pokémon não encontrado' });
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar o Pokémon:', error);
        res.status(500).json({ error: 'Erro ao buscar o Pokémon' });
      });
  }
  
}