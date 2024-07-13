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
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mydb',
      entities: [Resume, Job, Match],
      synchronize: true,
    }),
    ResumeModule,
    JobModule,
    MatchModule
  ],
})

export class AppModule {}
