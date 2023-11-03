import swaggerJSDoc from 'swagger-jsdoc'

const options = {
    title : "Pokémon api",
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Pokémon API',
        version: '1.0.0',
        description: 'Descrição da API',
      },
    },
    apis: ['./src/routes/*.ts'], // Adicione os caminhos dos arquivos de rotas da sua aplicação
  };
  
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec
  