import { Request, Response } from "express";

class EstudiantesControllers {
    constructor() {}

    consultar(req: Request, res: Response) {
        try {
            res.send('Estudiantes Controllers')
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los estudiantes:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

}
export default new EstudiantesControllers;