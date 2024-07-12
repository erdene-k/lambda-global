import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseDto } from '../../base.response.dto';

export class JobResponseDto extends BaseResponseDto {
  @ApiProperty({
    example: {
      id: 1,
      title: 'Software Developer',
      description: 'Responsible for developing and maintaining software applications.',
      salary: 60000,
      isRemote: true,
      professionLevel: 'MIDDLE',
      type: 'Full-time',
      skills: ['JavaScript', 'TypeScript', 'React'],
      requirements: ['Bachelor\'s degree in Computer Science', '3+ years of experience'],
      createdAt: '2024-07-11T07:19:56.503Z'
    },
    description: 'Job information',
    type: 'object',
    properties: {
      id: {
        description: 'Job ID',
        type: 'number',
      },
      title: {
        description: 'Job title',
        type: 'string',
      },
      description: {
        description: 'Job description',
        type: 'string',
      },
      salary: {
        description: 'Job salary',
        type: 'number',
      },
      isRemote: {
        description: 'Indicates if the job is remote',
        type: 'boolean',
      },
      professionLevel: {
        description: 'Profession level',
        type: 'string',
        enum: ['JUNIOR', 'MIDDLE', 'SENIOR', 'LEAD'],
      },
      type: {
        description: 'Job type',
        type: 'string',
      },
      skills: {
        description: 'List of required skills',
        type: 'array',
        items: {
          type: 'string',
        },
      },
      requirements: {
        description: 'List of job requirements',
        type: 'array',
        items: {
          type: 'string',
        },
      },
      createdAt: {
        description: 'Created date',
        type: 'string',
        format: 'date-time',
      }
    },
  })
  readonly response: {
    id: number;
    title: string;
    description: string;
    salary: number;
    isRemote: boolean;
    professionLevel: string;
    type?: string;
    skills: string[];
    requirements: string[];
    createdAt: Date;
  };
}
