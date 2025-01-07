import express from "express";
import cursoControllers from "../controllers/cursoControllers";
const cursoRoutes = express.Router()

cursoRoutes.get('/', cursoControllers.consultar);

export default cursoRoutes;