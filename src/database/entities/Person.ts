import { Entity, Column, Index, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Person {
  @PrimaryColumn("text", { generated: true })
  PersonId: string;
  @Column("string")
  firstName: string;
  @Column("string")
  lastName: string;
 }