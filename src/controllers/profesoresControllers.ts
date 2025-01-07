import { Request, Response } from "express";

class ProfesoresControllers {
    constructor() {}

    consultar(req: Request, res: Response) {
        try {
            res.send('Profesores Controllers')
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los profesores:', error);
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
            res.send('Ingresar Profesores Controllers')
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los profesores:', error);
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
            res.send(`Consultar profesor Controllers ${id}`)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los profesores:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

    actualizarprofesor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send(`Actualizar Profesor Controllers ${id}`)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los profesores:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

    borrarprofesor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send(`Borrar Profesor Controllers ${id}`)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los profesores:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

}
export default new ProfesoresControllers;