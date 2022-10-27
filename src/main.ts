import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './Interceptors/LoggingInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  console.info("[Nest]        - ___________ __________     Starting application on :  http://localhost:3000")
  await app.listen(3000);
}
bootstrap();
