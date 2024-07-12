import { ApiProperty } from '@nestjs/swagger';

export class BaseResponseDto {
  @ApiProperty({
    example: 200,
    description: 'Error code',
  })
  readonly code: number;

  @ApiProperty({
    description: 'Response data',
  })
  readonly response: any;
}
