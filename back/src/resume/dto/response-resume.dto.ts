import { ApiProperty } from '@nestjs/swagger';

import { BaseResponseDto } from '../../base.response.dto';

export class ResumeResponseDto extends BaseResponseDto {
  @ApiProperty({
    example: {
      "id": 1,
      "content": "Joe Doe software developer, BSc",
      "createdAt": "2024-07-11T07:19:56.503Z"
    },
    description: 'Resume information',
    type: 'object',
    properties: {
      id: {
        description: 'Resume id',
      },
      content: {
        description: 'Content of resume',
      },
      createdAt: {
        description: 'Created date',
      }
    },
  })
  readonly response: {
    id: number;
    content: string;
    createdAt: Date;
  };
}
