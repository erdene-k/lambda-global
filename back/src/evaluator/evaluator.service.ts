import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { Resume } from 'src/resume/resume.entity';

@Injectable()
export class EvaluatorService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
    @InjectRepository(Resume)
    private resumeRepository: Repository<Resume>,
  ) {}

  uploadResume(): Promise<Job[]> {
    // new resume
    return this.jobRepository.find();
  }

  matchJobWithResume(jobId: number, resumeId: number): number {
    
    return 1;
  }
}
