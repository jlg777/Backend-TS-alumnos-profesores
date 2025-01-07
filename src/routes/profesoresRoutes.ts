import express from "express";
import profesoresControllets from "../controllers/profesoresControllers";
import profesoresControllers from "../controllers/profesoresControllers";
const profesoresRoutes = express.Router()

profesoresRoutes.get('/',profesoresControllets.consultar);
profesoresRoutes.post('/',profesoresControllets.ingresar);

profesoresRoutes.get('/:id', profesoresControllers.consultardetalle);
profesoresRoutes.put('/:id', profesoresControllers.actualizarprofesor);
profesoresRoutes.delete('/:id', profesoresControllers.borrarprofesor);

export default profesoresRoutes;