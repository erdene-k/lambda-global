import { Job } from 'src/job/job.entity';
import { Resume } from 'src/resume/resume.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne
} from 'typeorm';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Job)
  @Column()
  jobId: number;

  @OneToOne(() => Resume)
  @Column() 
  resumeId: number;

  @Column({ type: "text" })
  msg: string;

  @Column({ nullable: true })
  percentage?: number;
}




