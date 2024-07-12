import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume } from './resume.entity';
import { CreateResumeDto } from './dto/create-resume.dto';
import Anthropic from '@anthropic-ai/sdk';
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

// const anthropic = new Anthropic({
//   apiKey: 'my_api_key', // defaults to process.env["ANTHROPIC_API_KEY"]
// });

// const msg = await anthropic.messages.create({
//   model: 'claude-3-5-sonnet-20240620',
//   max_tokens: 1000,
//   temperature: 0,
//   system :'You are a seasoned HR at It company. you are given job description and candidates resume pdf. You have to evaluate it by percentage, 100 if the candidate fits. When you evaluated candidate, give the reasonings',
//   messages: [
//     {
//       role: 'user',
//       content: [
//         {
//           type: 'text',
//           text: 'Please evaluate the following resume for the given job description.'
//         },
//         {
//           type: '',
//           file_id: fileBuffer
//         }
//       ]
//     }
//   ]
// });
// console.log(msg);
