import { Request, Response } from "express";
import { Curso } from "../models/cursoModel";
import { Profesor } from "../models/profesorModels";
import { Estudiante } from "../models/estudianteModels";

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

    async registrarestudiante(req: Request, res: Response) {
        try {
            const { estudiante_id, curso_id } = req.body;
            const estudiante = await Estudiante.findOneBy({ id: Number(estudiante_id) });
            const curso = await Curso.findOne({ where: { id: Number(curso_id) }, relations: ['estudiantes'] });

            if (!estudiante) {
                throw new Error('Estudiante no encontrado');
            }
            if (!curso) {
                throw new Error('Curso no encontrado');
            }
            //curso.estudiantes = curso.estudiantes || [];
            console.log('uno', curso.estudiantes)
            //curso.estudiantes.push(estudiante);
            if (curso.estudiantes.some(e => e.id === estudiante.id)) {
                throw new Error('Estudiante ya se encuentra en el curso')
            } else {
                curso.estudiantes.push(estudiante);
            }
            console.log('dos', curso.estudiantes)
            const registro = await Curso.save(curso);
            res.status(200).json(registro);

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

    async eliminarEstudianteDeCurso(req: Request, res: Response) {
        try {
            const { estudiante_id, curso_id } = req.body;
            
            // Buscar el estudiante y el curso
            const estudiante = await Estudiante.findOneBy({ id: Number(estudiante_id) });
            const curso = await Curso.findOne({ where: { id: Number(curso_id) }, relations: ['estudiantes'] });
    
            if (!estudiante) {
                throw new Error('Estudiante no encontrado');
            }
            if (!curso) {
                throw new Error('Curso no encontrado');
            }
    
            // Verificar si el estudiante está inscrito en el curso
            const index = curso.estudiantes.findIndex(e => e.id === estudiante.id);
    
            if (index === -1) {
                throw new Error('El estudiante no está inscrito en este curso');
            }
    
            // Eliminar al estudiante del arreglo de estudiantes del curso
            curso.estudiantes.splice(index, 1);  // `splice` elimina el estudiante en la posición encontrada
    
            // Guardar el curso actualizado
            const registro = await Curso.save(curso);
    
            res.status(200).json({
                message: 'Estudiante eliminado del curso exitosamente',
                curso: registro
            });
    
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al eliminar estudiante del curso:', error);
                res.status(500).send(error.message);
            } else {
                console.error('Error desconocido:', error);
                res.status(500).send('Error desconocido');
            }
        }
    }
    

}

export default new CursoControllers();
