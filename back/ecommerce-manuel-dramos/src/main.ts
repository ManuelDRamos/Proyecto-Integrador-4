import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerFunc } from './middlewares/loggerFuncion.middleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(loggerFunc);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
