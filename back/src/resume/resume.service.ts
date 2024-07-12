import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume } from './resume.entity';
import { CreateResumeDto } from './dto/create-resume.dto';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private resumeRepository: Repository<Resume>,
  ) {}

  findAll(): Promise<Resume[]> {
    return this.resumeRepository.find();
  }

  findOne(id: number): Promise<Resume | null> {
    return this.resumeRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.resumeRepository.delete(id);
  }

  async create(createResumeDto: CreateResumeDto){
    const newResume = this.resumeRepository.create(createResumeDto);
    return this.resumeRepository.save(newResume);
  }
}