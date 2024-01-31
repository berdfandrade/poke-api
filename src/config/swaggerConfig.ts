import swaggerJSDoc from "swagger-jsdoc";

const options = {
  title: "Pokémon api",
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pokémon API",
      version: "1.0.0",
      description:
        "The Pokemon API provides endpoints to retrieve information about Pokemon. It is built using Express, a popular Node.js web application framework.",
    },
  },
  apis: ["./src/routes/*.ts"], // Adicione os caminhos dos arquivos de rotas da sua aplicação
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

/* 
    HP = (2 x base + IV + EV / 4) x level / 100 + level + 10 
*/
