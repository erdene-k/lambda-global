import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEnum, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProfessionLevel } from '../job.entity';

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
  readonly salary: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    example: true,
    description: 'Indicates if the job is remote',
  })
  readonly isRemote: boolean;

  @IsEnum(ProfessionLevel)
  @IsNotEmpty()
  @ApiProperty({
    example: ProfessionLevel.MIDDLE,
    description: 'Profession level',
    enum: ProfessionLevel,
  })
  readonly professionLevel: ProfessionLevel;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Full-time',
    description: 'Job type',
    required: false,
  })
  readonly type?: string;

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
    description: 'List of job requirements',
    type: [String],
  })
  readonly requirements: string[];
}
