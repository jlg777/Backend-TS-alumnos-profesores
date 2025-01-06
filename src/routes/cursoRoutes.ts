import express from "express";
const cursoRoutes = express.Router()

cursoRoutes.get('/', (req, res) => {
    res.send('¡CursoRoutes!');
  });

export default cursoRoutes;