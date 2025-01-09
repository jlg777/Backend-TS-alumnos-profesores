import { Request, Response } from "express";
import { Profesor } from "../models/profesorModels";

class ProfesoresControllers {
    constructor() {}

    async consultar(req: Request, res: Response) {
        try {
           const data = await Profesor.find();
           res.status(200).json({data});
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

    async ingresar(req: Request, res: Response) {
        try {
            const data = await Profesor.save(req.body);
            res.status(201).json(data);
            //res.send('Ingresar Profesores Controllers')
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al ingresar los profesores:', error);
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
            const data = await Profesor.findOneBy({id: Number(id)});
            if(!data){
                throw new Error (`No se encuentra el id ${id}`)
            }
            res.status(200).json(data)
            //res.send(`Consultar profesor Controllers ${id}`)
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

    async actualizarprofesor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await Profesor.findOneBy({id: Number(id)});
            if (!data) {
                throw new Error('Estudiante no encontrado');
            }
            await Profesor.update({id: Number(id)}, req.body);
            const registroActualizado = await Profesor.findOneBy({id: Number(id)});
            res.status(200).json(registroActualizado);
            //res.send(`Actualizar Profesor Controllers ${id}`)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al actualizar los profesores:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

    async borrarprofesor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await Profesor.findOneBy({id: Number(id)})
            if (!data) {
                throw new Error('Profesor no encontrado');
            }
            await Profesor.delete({id: Number(id)})
            res.status(200).send('Profesor borrado');
            //res.send(`Borrar Profesor Controllers ${id}`)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al borrar los profesores:', error);
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