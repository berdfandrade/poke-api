import mongoose, { Document, Schema } from 'mongoose';

// Defina uma interface que corresponda à estrutura do seu documento no MongoDB
interface PokemonDocument extends Document {
  _id: string;
  image_url: string;
  Id: string;
  Names: string;
  Type1: string;
  Type2: string;
  Total: string;
  HP: string;
  Attack: string;
  Defense: string;
  "Sp. Atk": string;
  "Sp. Def": string;
  Speed: string;
}

// Defina o schema correspondente ao seu documento
const PokemonSchema = new Schema<PokemonDocument>({
  _id: String,
  image_url: String,
  Id: String,
  Names: String,
  Type1: String,
  Type2: String,
  Total: String,
  HP: String,
  Attack: String,
  Defense: String,
  "Sp. Atk": String,
  "Sp. Def": String,
  Speed: String,
});

// Crie o modelo com base no schema
const PokemonModel = mongoose.model<PokemonDocument>('Pokemon', PokemonSchema);

export default PokemonModel;
