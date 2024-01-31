# Pokémon API

The Pokémon API provides endpoints to retrieve information about Pokemon. It is built using Express, a popular Node.js web application framework.
Swagger Documentation

The API documentation is available using Swagger UI at the /docs endpoint. It allows users to explore and understand the available endpoints and their functionalities.
Endpoints
#### Get All Pokémons
```
    Endpoint: /poke/all
    Method: GET
    Summary: Retrieve a list of all Pokémons.
    Responses:
        200 OK: Successful request. Returns the list of Pokémons.
        500 Internal Server Error: Error while fetching Pokémon data.
```
#### Get a Pokémon by Name
```
    Endpoint: /poke/{pokemon}
    Method: GET
    Summary: Retrieve information about a specific Pokémon by its name.
    Parameters:
        pokemon (path parameter, required): The name of the Pokémon to be searched.
    Responses:
        200 OK: Successful request. Returns the found Pokémon.
        404 Not Found: Pokémon not found. The specified Pokémon was not found.
```
*How to Use*

    - Explore the Swagger UI at /docs to understand the available endpoints and - their expected parameters.
    - Use the `/poke/all` endpoint to get a list of all Pokémons.
    - Use the `/poke/{pokemon}` endpoint with a specific Pokémon name to retrieve detailed information about that Pokémon.

Feel free to integrate and leverage this API to enhance your Pokémon-related applications!