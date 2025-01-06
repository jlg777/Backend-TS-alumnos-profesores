import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cursoRoutes from './routes/cursoRoutes';
import estudiantesRoutes from './routes/estudiantesRoutes';
import profesoresRoutes from './routes/profesoresRoutes';

const app = express();
const PORT = 3000;
// Activar el middleware Morgan
app.use(morgan('dev'));
// Habilitar CORS para todas las rutas
app.use(cors());

// Rutas
app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
  });

// Registrar el router con una ruta base '/api'
app.use('/curso', cursoRoutes);
app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);

app.listen(PORT, () => {
    console.log(`escuchando en el puerto http://localhost:${PORT}`)
})