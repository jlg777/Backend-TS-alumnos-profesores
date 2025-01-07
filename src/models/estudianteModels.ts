import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}