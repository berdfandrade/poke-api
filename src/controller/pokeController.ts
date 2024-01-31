import { Request, Response } from "express";
import Pokemon from "../models/pokeModel";

export default class PokemonController {
  static getPokemons(req: Request, res: Response) {
    Pokemon.find()
      .then((pokemons) => {
        res.status(200).json(pokemons);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
        res.status(500).json({ error: "Error fetching Pokémon" });
      });
  }

  static getPokemonLimit(req: Request, res: Response) {
    const limiter = req.params.limit;
    const limit = parseInt(limiter);

    // Check if the limit parameter is a valid number
    if (isNaN(limit) || limit <= 0) {
      return res
        .status(400)
        .json({
          error: "The limit parameter must be a positive integer.",
        });
    }

    Pokemon.find()
      .limit(limit)
      .then((pokemon) => {
        res.status(200).json(pokemon);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
        res.status(500).json({ error: "Error fetching Pokémon data" });
      });
  }

  static getAPokemon(req: Request, res: Response) {
    const pokemonName = req.params.pokemon;

    if (!pokemonName) {
      res.status(400).json({ message: "Please provide the Pokémon name!" });
    }

    const regex = new RegExp(pokemonName, "i");

    Pokemon.findOne({ Names: regex })
      .then((pokemon) => {
        if (pokemon) {
          res.status(200).json(pokemon);
        } else {
          res.status(404).json({ error: "Pokémon not found" });
        }
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
        res.status(500).json({ error: "Error fetching Pokémon" });
      });
  }
}