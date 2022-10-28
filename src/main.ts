import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './Interceptors/LoggingInterceptor';
import { Logger } from '@nestjs/common';
import { AllExceptionsFilter } from './Filters/allExceptionFilter';
import { HttpExceptionFilter } from './Filters/httpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
  const logger = new Logger("NestApplication");
  logger.log(`Starting application on : ${await app.getUrl()}`)
}
bootstrap();
