import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Labour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  aadhar: string;

  @Column('float')
  salary: number;

  @Column()
  joiningDate: string; // or Date type: @Column({ type: 'date' })

  @Column()
  skill: string;

  @Column()
  city: string;

  @Column('float')
  price: number;
}
