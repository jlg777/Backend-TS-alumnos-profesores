import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class estudiante {
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
}