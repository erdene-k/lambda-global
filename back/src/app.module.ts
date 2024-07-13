import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resume } from './resume/resume.entity';
import { ResumeModule } from './resume/resume.module';
import { Job } from './job/job.entity';
import { JobModule } from './job/job.module';
import { MatchModule } from './match/match.module';
import { Match } from './match/match.entity';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      database:'db',
      username: 'root',
      password: 'root',
      entities: [Resume, Job, Match],
      synchronize: true,
    }),
    ResumeModule,
    JobModule,
    MatchModule
  ],
})

export class AppModule {}
