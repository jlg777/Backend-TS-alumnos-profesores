import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

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

app.listen(PORT, () => {
    console.log(`escuchando en el puerto http://localhost:${PORT}`)
})