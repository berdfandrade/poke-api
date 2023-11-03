import mongoose, { Schema, Document } from 'mongoose';

interface IPokemon extends Document {
  _id: string;
  number: string;
  image_url: string;
  id: string;
  name: string;
  type1: string;
  type2: string;
  total: string;
  hp: string;
  attack: string;
  defense: string;
  spAtk: string;
  spDef: string;
  speed: string;
}

const pokemonSchema: Schema = new Schema<IPokemon>({
  _id: String,
  number: String,
  image_url: String,
  id: String,
  name: String,
  type1: String,
  type2: String,
  total: String,
  hp: String,
  attack: String,
  defense: String,
  spAtk: String,
  spDef: String,
  speed: String
});

const Pokemon = mongoose.model<IPokemon>('Pokemon', pokemonSchema);

export default Pokemon;
