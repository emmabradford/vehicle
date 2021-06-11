import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class vehicle extends BaseEntity {

    @PrimaryGeneratedColumn()
    vehicle_id: number;

    @Column()
    vehicle_make: string;

    @Column()
    vehicle_model: string;

    @Column()
    vehicle_year: number;

}
