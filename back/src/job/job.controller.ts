import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JobResponseDto } from './dto/response-job.dto';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Request,
  Post
} from '@nestjs/common';

@ApiTags('Jobs')
@Controller('jobs')
export class JobController {
  
  constructor(private readonly jobService: JobService) {}
  @ApiOperation({ summary: 'Create new job' })
  @ApiResponse({
    status: 200,
    description: 'New Job created',
    type: CreateJobDto,
  })
  @HttpCode(200)
  @Post()
  async createJob(@Request() req, @Body() Job: CreateJobDto) {
    return this.jobService.create(Job);
  }

  @ApiOperation({ summary: 'Get all jobs' })
  @ApiResponse({
    status: 200,
    description: 'Jobs information',
    type: JobResponseDto,
  })
  @Get()
  async getJob() {
    return this.jobService.findAll();
  }
}
