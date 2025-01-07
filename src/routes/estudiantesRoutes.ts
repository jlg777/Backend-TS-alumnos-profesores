import express from "express";
import estudiantesControllers from "../controllers/estudiantesControllers";
const estudiantesRoutes = express.Router()

estudiantesRoutes.get('/', estudiantesControllers.consultar);
estudiantesRoutes.post('/', estudiantesControllers.ingresar);

estudiantesRoutes.get('/:id', estudiantesControllers.consultardetalle);

estudiantesRoutes.put('/:id', estudiantesControllers.actualizarestudiante);

estudiantesRoutes.delete('/:id', estudiantesControllers.borrarestudiante);

export default estudiantesRoutes;