import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerFunc } from './middlewares/loggerFuncion.middleware';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Ecommerce Manuel Ramos')
    .setDescription('este es el proyecto final del modulo 4 para Henry')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  app.use(loggerFunc);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
