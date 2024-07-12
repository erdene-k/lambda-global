import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  findOne(id: number): Promise<Job | null> {
    return this.jobRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.jobRepository.delete(id);
  }

  async create(createJobDto: CreateJobDto){
    const newJob = this.jobRepository.create(createJobDto);
    return this.jobRepository.save(newJob);
  }
}