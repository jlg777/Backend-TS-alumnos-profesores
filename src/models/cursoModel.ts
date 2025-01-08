import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profesor } from "./profesorModels";
import { Estudiante } from "./estudianteModels";

@Entity('cursos')
export class Curso extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column('text')
    descripcion: string;

    @CreateDateColumn()
    createAt: Date;

    @CreateDateColumn()
    updateAt: Date;

    @ManyToOne(() => Profesor, (profesor) => profesor.curso)
    @JoinColumn({name: 'profesor_id'})
    profesor: Profesor;

    @ManyToMany(() => Estudiante)
    @JoinTable({
        name: 'cursos_estudiantes',
        joinColumn:{name: 'curso_id'},
        inverseJoinColumn: {name: 'estudiante_id'}
    })
    estudiantes: Estudiante[];
}