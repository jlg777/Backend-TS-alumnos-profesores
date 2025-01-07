import express from "express";
import estudiantesControllers from "../controllers/estudiantesControllers";
const estudiantesRoutes = express.Router()

estudiantesRoutes.get('/', estudiantesControllers.consultar);

export default estudiantesRoutes;