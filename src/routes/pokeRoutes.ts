import express from "express";
import PokemonController from "../controller/pokeController";
import swaggerSpec from "../config/swaggerConfig";
import swaggerUi from 'swagger-ui-express';


const router = express.Router();

// Rota Swagger UI
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rota para buscar todos os Pokémons
/**
 * @swagger
 * /poke/all:
 *   get:
 *     summary: Obter todos os Pokémons.
 *     responses:
 *       '200':
 *         description: Sucesso. Retorna a lista de Pokémons.
 */
router.get('/poke/all', PokemonController.getPokemons);

// Rota para buscar um Pokémon por nome
/**
 * @swagger
 * /poke/{pokemon}:
 *   get:
 *     summary: Obter um Pokémon por nome.
 *     parameters:
 *       - in: path
 *         name: pokemon
 *         required: true
 *         description: Nome do Pokémon a ser pesquisado.
 *     responses:
 *       '200':
 *         description: Sucesso. Retorna o Pokémon encontrado.
 *       '404':
 *         description: Não encontrado. O Pokémon não foi encontrado.
 */
router.get('/poke/:pokemon', PokemonController.getAPokemon);

export default router;