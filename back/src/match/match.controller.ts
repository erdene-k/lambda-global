import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpCode, Request, Post, Get } from '@nestjs/common';
import { MatchResponseDto } from './dto/response-match.dto';

@ApiTags('matches')
@Controller('matches')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}
  @ApiOperation({ summary: 'Create new match' })
  @ApiResponse({
    status: 200,
    description: 'New match created',
    type: CreateMatchDto,
  })
  @HttpCode(200)
  @Post()
  async createMatch(@Request() req, @Body() match: CreateMatchDto) {
    return this.matchService.matchJobWithResume(match);
  }

  @ApiOperation({ summary: 'Get all Matches' })
  @ApiResponse({
    status: 200,
    description: 'Matches information',
    type: MatchResponseDto,
  })
  @Get()
  async getMatch() {
    return this.matchService.findAll();
  }
}
