import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante extends BaseEntity {
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
    @CreateDateColumn()
    createAt: Date;
    @CreateDateColumn()
    updateAt: Date;
}