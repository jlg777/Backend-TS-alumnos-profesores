import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`escuchando en el puerto http://localhost:${PORT}`)
})