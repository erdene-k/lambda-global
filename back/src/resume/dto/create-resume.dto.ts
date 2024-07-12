import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateResumeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Erdene software developer, BSc',
    description: `Resume content`,
  })
  readonly content: string;
}
