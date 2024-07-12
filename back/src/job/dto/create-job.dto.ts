import { IsNotEmpty, IsNumber, IsString, IsEnum, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { JobType, Condition } from '../job.entity';
export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Software Developer',
    description: 'Job title',
  })
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Responsible for developing and maintaining software applications.',
    description: 'Job description',
  })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 60000,
    description: 'Job salary',
  })
  readonly rate: number;

  @IsEnum(JobType)
  @IsNotEmpty()
  @ApiProperty({
    example: JobType.FULLTIME,
    description: 'Job type',
    enum: JobType,
  })
  readonly jobType: JobType;

  @IsEnum(Condition)
  @IsNotEmpty()
  @ApiProperty({
    example: Condition.REMOTE,
    description: 'Condition',
    enum: Condition,
  })
  readonly condition: Condition;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    example: ['JavaScript', 'TypeScript', 'React'],
    description: 'List of required skills',
    type: [String],
  })
  readonly skills: string[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    example: ['Bachelor\'s degree in Computer Science', '3+ years of experience'],
    description: 'List of job responsibilities',
    type: [String],
  })
  readonly responsibilities: string[];
}
