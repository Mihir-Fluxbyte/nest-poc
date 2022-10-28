import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScopedService } from './scoped.service';
import { SecondController } from './second.controller';
import { TransientService } from './transient.service';

@Module({
  imports: [],
  controllers: [AppController, SecondController],
  providers: [AppService,ScopedService, TransientService],
})
export class AppModule {}
