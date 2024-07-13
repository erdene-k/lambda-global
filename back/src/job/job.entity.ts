import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

export enum JobType {
  FULLTIME = 'FULLTIME',
  PARTTIME = 'PARTTIME',
  CONTRACTOR = 'CONTRACTOR'
}

export enum Condition {
  ONSITE = 'ONSITE',
  REMOTE = 'REMOTE',
  HYBRID = 'HYBRID'
}

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: "text" }) 
  description: string;

  @Column('decimal')
  rate: number;

  @Column({
    type: 'enum',
    enum: JobType,
  })
  jobType: JobType;

  @Column({
    type: 'enum',
    enum: Condition,
  })
  condition: Condition;

  @Column('simple-array')
  skills: string[];

  @Column('simple-array')
  responsibilities: string[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}




