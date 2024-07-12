import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseDto } from '../../base.response.dto';
import { JobType, Condition } from '../job.entity'; // Adjust the path as necessary

export class JobResponseDto extends BaseResponseDto {
  @ApiProperty({
    example: {
      id: 1,
      title: 'Software Developer',
      description: 'Responsible for developing and maintaining software applications.',
      rate: 60000,
      isRemote: true,
      jobType: 'FULLTIME',
      condition: 'REMOTE',
      skills: ['JavaScript', 'TypeScript', 'React'],
      responsibilities: ['Bachelor\'s degree in Computer Science', '3+ years of experience'],
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
      rate: {
        description: 'Job salary',
        type: 'number',
      },
      isRemote: {
        description: 'Indicates if the job is remote',
        type: 'boolean',
      },
      jobType: {
        description: 'Job type',
        type: 'string',
        enum: ['FULLTIME', 'PARTTIME', 'CONTRACTOR'],
      },
      condition: {
        description: 'Job condition',
        type: 'string',
        enum: ['ONSITE', 'REMOTE', 'HYBRID'],
      },
      skills: {
        description: 'List of required skills',
        type: 'array',
        items: {
          type: 'string',
        },
      },
      responsibilities: {
        description: 'List of job responsibilities',
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
    rate: number;
    jobType: JobType;
    condition: Condition;
    skills: string[];
    responsibilities: string[];
    createdAt: Date;
  };
}
