import { Request, Response } from "express";
import { Estudiante } from "../models/estudianteModels";

class EstudiantesControllers {
    constructor() {}

    async consultar(req: Request, res: Response) {
        try {
            const data = await Estudiante.find();
            res.status(200).json({data});
            //res.send('Estudiantes Controllers')
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

    async ingresar(req: Request, res: Response) {
        //console.log(req.body)
        try {
            const registro = await Estudiante.save(req.body) 
            res.status(201).json(registro);
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

    async consultardetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Estudiante.findOneBy({id: Number(id)});
            if(!registro){
                throw new Error (`No se encuentra el id ${id}`)
            }
            res.status(200).json(registro)
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

    async actualizarestudiante(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Estudiante.findOneBy({ id: Number(id) });
            if (!registro) {
                throw new Error('Estudiante no encontrado');
            }
            await Estudiante.update({ id: Number(id) }, req.body);
            const registroActualizado = await Estudiante.findOneBy({ id: Number(id) });
            res.status(200).json(registroActualizado);
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

    async borrarestudiante(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Estudiante.findOneBy({ id: Number(id) });
            if (!registro) {
                throw new Error('Estudiante no encontrado');
            }
            await Estudiante.delete({ id: Number(id) });
            res.status(204);
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