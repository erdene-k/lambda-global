import { IsNotEmpty, IsNumber, IsString, IsEnum, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDto {
 
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'Job Id',
  })
  readonly jobId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'Resume Id',
  })
  readonly resumeId: number;

}
