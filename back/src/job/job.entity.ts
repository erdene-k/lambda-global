import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

export enum ProfessionLevel {
  JUNIOR = 'JUNIOR',
  MIDDLE = 'MIDDLE',
  SENIOR = 'SENIOR',
  LEAD = 'LEAD',
}

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('decimal')
  salary: number;

  @Column()
  isRemote: boolean;

  @Column({
    type: 'enum',
    enum: ProfessionLevel,
  })
  professionLevel: ProfessionLevel;

  @Column({ nullable: true })
  type?: string;

  @Column('simple-array')
  skills: string[];

  @Column('simple-array')
  requirements: string[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
