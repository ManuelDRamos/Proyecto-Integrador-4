import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerFunc } from './middlewares/loggerFuncion.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(loggerFunc);

  await app.listen(3000);
}
bootstrap();
