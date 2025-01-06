import express from "express";
const profesoresRoutes = express.Router()

profesoresRoutes.get('/', (req, res) => {
    res.send('¡ProfesoresRoutes!');
  });

export default profesoresRoutes;