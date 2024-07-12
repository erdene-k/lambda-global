import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResumeResponseDto } from './dto/response-resume.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Request,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

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

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.resumeService.upload(file);
  }
}

