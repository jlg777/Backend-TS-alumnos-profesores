import { DataSource } from 'typeorm'
import { Curso } from '../models/cursoModel'
import { Estudiante } from '../models/estudianteModels'
import { Profesor } from '../models/profesorModels'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'cursos_db',
  synchronize: false,
  logging: true,
  entities: [Curso, Estudiante, Profesor],
  subscribers: [],
  migrations: []
})
