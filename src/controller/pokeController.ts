
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
}
