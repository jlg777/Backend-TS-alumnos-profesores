import { Request, Response } from "express";
import { Curso } from "../models/cursoModel";
import { Profesor } from "../models/profesorModels";

class CursoControllers {
    constructor() { }

    async consultar(req: Request, res: Response) {
        try {
            const data = await Curso.find({ relations: { profesor: true, estudiantes: true } });
            res.status(200).json({ data });
            //res.send('Curso Controllers');
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los cursos:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

    async ingresar(req: Request, res: Response) {
        const { profesor } = req.body;
        try {
            const profesorData = await Profesor.findOneBy({ id: Number(profesor) });
            if (!profesorData) {
                throw new Error(`No se encuentra el id ${profesor}`)
            }
            const data = await Curso.save(req.body);
            res.status(201).json(data);
            //res.send('Ingreso Controllers');
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los cursos:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

    async registrarestudiante(req: Request, res: Response) {
        try {
            res.send('Registro estudiantes-curso Controllers');
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los cursos:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

    async consultarcurso(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Curso.findOne({ where: { id: Number(id) }, relations: { profesor: true, estudiantes: true } });
            if (!registro) {
                throw new Error(`No se encuentra el id ${id}`)
            }
            res.status(200).json(registro)
            //res.send(`consultar curso Controllers ${id}`);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los cursos:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

    async actualizarcurso(req: Request, res: Response) {
        const { id } = req.params;
        const { profesor } = req.body;
        console.log(profesor)
        try {
            const profesorData = await Profesor.findOneBy({ id: Number(profesor) });
            if (!profesorData) {
                throw new Error(`No se encuentra el profesor id  ${profesor}`)
            }

            const data = await Curso.findOneBy({ id: Number(id) });
            if (!data) {
                throw new Error('Curso no encontrado');
            }
            await Curso.update({ id: Number(id) }, req.body);
            const registroActualizado = await Curso.findOneBy({ id: Number(id) });
            res.status(200).json(registroActualizado);
            //res.send(`Actualizar curso Controllers ${id}`);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los cursos:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }

    async borrarcurso(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await Curso.findOneBy({ id: Number(id) })
            if (!data) {
                throw new Error('Curso no encontrado');
            }
            await Curso.delete({ id: Number(id) })
            res.status(200).send('Profesor borrado');
            //res.send(`Borrar curso Controllers ${id}`);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al consultar los cursos:', error);
                res.status(500).send(error.message);
            } else {
                // En caso de que el error no sea una instancia de Error
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }
}

export default new CursoControllers();
