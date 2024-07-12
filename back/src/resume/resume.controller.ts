import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResumeResponseDto } from './dto/response-Resume.dto';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Request,
  Post
} from '@nestjs/common';

@ApiTags('Resumes')
@Controller('resumes')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}
  @ApiOperation({ summary: 'Create new resume' })
  @ApiResponse({
    status: 200,
    description: 'New resume created',
    type: CreateResumeDto,
  })
  @HttpCode(200)
  @Post()
  async createResume(@Request() req, @Body() resume: CreateResumeDto) {
    return this.resumeService.create(resume);
  }

  @ApiOperation({ summary: 'Get all resumes' })
  @ApiResponse({
    status: 200,
    description: 'Resumes information',
    type: ResumeResponseDto,
  })
  @Get()
  async getResume() {
    return this.resumeService.findAll();
  }
}
