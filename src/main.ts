import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CustomLoggerService } from './infrastructure/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(CustomLoggerService));

  const apiDocument = new DocumentBuilder()
    .setTitle('API for Integrate PIX')
    .setDescription('API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, apiDocument);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}

bootstrap();
