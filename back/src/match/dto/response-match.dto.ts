import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseDto } from '../../base.response.dto';

export class MatchResponseDto extends BaseResponseDto {
  @ApiProperty({
    example: {
      id: 10,
      jobId: 1,
      msg: 'Language Assessment:\nJob Description Language: English\n',
      resumeId: 10,
    },
    description: 'Match information',
    type: 'object',
    properties: {
      id: {
        description: 'Match id',
      },
      content: {
        description: 'Content of Match',
      },
      createdAt: {
        description: 'Created date',
      },
    },
  })
  readonly response: {
    id: number;
    jobId: number;
    resumeId: number;
    msg: string;
  };
}
