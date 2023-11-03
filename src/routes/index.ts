
import express, { Request, Response } from "express";
import pokemon from './pokeRoutes'

const routes = (app : any) => {
    app.route('/').get((req : Request, res: Response) =>{
        res.status(200).send({ 
            Message : "Pokemon API"})
    })

    app.use(
        express.json(),
        pokemon
    )
}

export default routes;