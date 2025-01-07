import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cursos')
export class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @CreateDateColumn()
    createAt: Date;

    @CreateDateColumn()
    updateAt: Date;
}