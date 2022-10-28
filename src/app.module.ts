import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './Services/app.service';
import { ScopedService } from './Services/scoped.service';
import { SecondController } from './second.controller';
import { TransientService } from './Services/transient.service';

@Module({
  imports: [],
  controllers: [AppController, SecondController],
  providers: [AppService, ScopedService, TransientService],
})
export class AppModule {}
