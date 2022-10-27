import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecondController } from './second.controller';

@Module({
  imports: [],
  controllers: [AppController, SecondController],
  providers: [AppService],
})
export class AppModule {}
