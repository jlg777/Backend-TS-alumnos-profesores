import express from "express";
const estudiantesRoutes = express.Router()

estudiantesRoutes.get('/', (req, res) => {
    res.send('¡EstudianteRoutes!');
  });

export default estudiantesRoutes;