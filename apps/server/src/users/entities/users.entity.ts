import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({unique: true})
  email: string;

  @Column({nullable: true})
  firstname: string;

  @Column({nullable: true})
  lastname: string;

  @Column()
  password: string;
}
