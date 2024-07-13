import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume } from './resume.entity';
import { CreateResumeDto } from './dto/create-resume.dto';
import * as pdf from 'pdf-parse';

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

  async create(createResumeDto: CreateResumeDto) {
    const newResume = this.resumeRepository.create(createResumeDto);
    return this.resumeRepository.save(newResume);
  }

  async upload(file: Express.Multer.File) {
    const data = await pdf(file.buffer);
    const text = data.text.split('\n').join();
    this.create({content: text});
    return { message: 'success' };
  }
}

