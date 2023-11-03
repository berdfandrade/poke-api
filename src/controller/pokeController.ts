import { Request, Response } from 'express';
import Pokemon from '../models/pokeModel';


export default class pokemonController {
    static getPokemons (req : Request, res : Response){
        Pokemon.find()
    }
}