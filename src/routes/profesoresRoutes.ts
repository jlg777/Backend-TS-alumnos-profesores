import express from "express";
import profesoresControllets from "../controllers/profesoresControllers";
const profesoresRoutes = express.Router()

profesoresRoutes.get('/',profesoresControllets.consultar);

export default profesoresRoutes;