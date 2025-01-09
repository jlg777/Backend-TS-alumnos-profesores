import express from 'express'
import profesoresControllers from '../controllers/profesoresControllers'
const profesoresRoutes = express.Router()

profesoresRoutes.get('/', profesoresControllers.consultar)
profesoresRoutes.post('/', profesoresControllers.ingresar)

profesoresRoutes.get('/:id', profesoresControllers.consultardetalle)
profesoresRoutes.put('/:id', profesoresControllers.actualizarprofesor)
profesoresRoutes.delete('/:id', profesoresControllers.borrarprofesor)

export default profesoresRoutes
