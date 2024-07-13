import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../job/job.entity';
import { Resume } from 'src/resume/resume.entity';
import { ResumeService } from 'src/resume/resume.service';
import { JobService } from 'src/job/job.service';
import Anthropic from '@anthropic-ai/sdk';
import { Match } from './match.entity';
import { CreateMatchDto } from './dto/create-match.dto';

@Injectable()
export class MatchService {
  constructor(
    private resumeService: ResumeService,
    private jobService: JobService,
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
    private anthropic: Anthropic,
  ) {
    this.anthropic = new Anthropic({apiKey: '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'});
  }

  async match(job: Job, resume: Resume) {
    const result = await this.anthropic.messages.create({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 1000,
      temperature: 0,
      system: `
      You are a seasoned HR professional at an IT company with multilingual capabilities. You will be given a job description and a candidate's resume, which may be in different languages. If they are in different languages, first translate both to English before proceeding with the evaluation.
    
      Evaluate the candidate's fit for the job as a percentage, with 100% indicating a perfect fit. 
    
      Focus on the following aspects:
      1. Technical skills match
      2. Relevant experience
      3. Education requirements
      4. Soft skills alignment
    
      Provide your evaluation in the following format:
    
      Language Assessment:
      Job Description Language: [Language]
      Resume Language: [Language]
      (Include any translation notes if applicable)
    
      Overall Fit: [Percentage]%
    
      Reasoning:
      1. Technical Skills: [Brief analysis]
      2. Experience: [Brief analysis]
      3. Education: [Brief analysis]
      4. Soft Skills: [Brief analysis]
    
      Strengths:
      - [List key strengths]
    
      Areas for Improvement:
      - [List areas where the candidate could improve to better fit the role]
    
      Calculate the overall fit percentage by averaging the fit in each of the four main aspects, rounding to the nearest whole number.
      `,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Please evaluate the following resume for the given job description. Translate if necessary.',
            },
            {
              type: 'text',
              text: `Job Description: ${JSON.stringify(job)}`
            },
            {
              type: 'text',
              text: `Candidate's Resume: ${JSON.stringify(resume)}`
            }
          ],
        },
      ],
    });
    
    const match = new Match()
    match.jobId = job.id;
    match.resumeId = resume.id;
 
    //@ts-ignore
    match.msg = result.content[0].text
    const newResume = this.matchRepository.create(match);

    return this.matchRepository.save(newResume);
  }

  async matchJobWithResume(match: CreateMatchDto): Promise<Match|number> {
    const previousMatch = await this.matchRepository.findOneBy({
      jobId: match.jobId,
      resumeId: match.resumeId,
    });

    if (previousMatch) {
      return previousMatch;
    }

    const job = await this.jobService.findOne(match.jobId);
    const resume = await this.resumeService.findOne(match.resumeId);

    if (!job || !resume) {
      throw new Error('job or resume not found');
    }

    return this.match(job, resume)
  }
  
  findAll(): Promise<Match[]> {
    return this.matchRepository.find();
  }

}
