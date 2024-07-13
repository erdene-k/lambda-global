import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.use(helmet());
  app.use(compression());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Global Lambda')
    .setDescription('Global Lambda API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    jsonDocumentUrl: 'swagger/json',
  });

  const port = configService.get<number>('PORT', 3000);

  await app.listen(port);

  console.log('App listening: http://localhost', port);
}
bootstrap();
