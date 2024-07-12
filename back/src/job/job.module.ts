import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobService } from './job.service';

import { Job } from './job.entity';
import { JobController } from './job.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  controllers: [JobController],
  providers: [JobService],

})
export class JobModule {}