import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    password: "",
    database: "cursos_db",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})