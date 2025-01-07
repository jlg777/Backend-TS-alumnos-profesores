import { Request, Response } from "express";

class EstudiantesControllers {
    constructor() {}

    consultar(req: Request, res: Response) {
        try {
            res.send('Estudiantes Controllers')
        } catch (error) {
            console.error('Error al consultar los cursos:', error);
            res.status(500).json({ message: 'Error al consultar los cursos' });
        }
    }

}
export default new EstudiantesControllers;