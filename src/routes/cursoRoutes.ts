import express from "express";
import cursoControllers from "../controllers/cursoControllers";
const cursoRoutes = express.Router()

cursoRoutes.get('/', cursoControllers.consultar);
cursoRoutes.post('/', cursoControllers.ingresar);
cursoRoutes.post('/registraEstudiante', cursoControllers.registrarestudiante);

cursoRoutes.get('/:id', cursoControllers.consultarcurso);
cursoRoutes.put('/:id', cursoControllers.actualizarcurso);
cursoRoutes.delete('/:id', cursoControllers.borrarcurso)

export default cursoRoutes;