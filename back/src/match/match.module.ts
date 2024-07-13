import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { ResumeService } from 'src/resume/resume.service';
import { JobService } from 'src/job/job.service';
import Anthropic from '@anthropic-ai/sdk';
import { Resume } from 'src/resume/resume.entity';
import { Job } from 'src/job/job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Match, Job, Resume])],
  controllers: [MatchController],
  providers: [MatchService, JobService, ResumeService, Anthropic],

})
export class MatchModule {}