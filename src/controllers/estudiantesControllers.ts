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

    ingresar(req: Request, res: Response) {
        try {
            res.send(' Ingreso Estudiantes Controllers')
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

    consultardetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send(`Estudiante Controllers ${id}`)
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

    actualizarestudiante(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send(`Modificar Estudiante Controllers ${id}`)
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

    borrarestudiante(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send(`Borrar Estudiante Controllers ${id}`)
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