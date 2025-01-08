import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "./cursoModel";

@Entity('profesores')
export class Profesor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dni: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email:string;

    @Column()
    profesion:string;

    @Column()
    telefono: string;

    @CreateDateColumn()
    createAt: Date;

    @CreateDateColumn()
    updateAt: Date;

    @OneToMany(() => Curso, (curso) => curso.profesor)
    curso: Curso[];
}