import app from './app'
import { AppDataSource } from './db/data-source';
const PORT = 3000;

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Base de datos conectada')
  app.listen(PORT, () => {
    console.log(`escuchando en el puerto http://localhost:${PORT}`)
})
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

main();