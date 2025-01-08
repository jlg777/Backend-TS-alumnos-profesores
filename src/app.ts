import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cursoRoutes from './routes/cursoRoutes';
import estudiantesRoutes from './routes/estudiantesRoutes';
import profesoresRoutes from './routes/profesoresRoutes';

const app = express();
// Activar el middleware Morgan
app.use(morgan('dev'));
// Habilitar CORS para todas las rutas
app.use(cors());
// Habilitar el middleware para analizar JSON en el cuerpo de la solicitud
app.use(express.json());
// Rutas
app.get('/', (req: Request, res: Response) => {
    res.send('¡Hola Mundo!');
  });

// Registrar el router con una ruta base '/api'
app.use('/cursos', cursoRoutes);
app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);

export default app