import { Injectable } from '@nestjs/common';
import { ScopedService } from './scoped.service';
import { TransientService } from './transient.service';

@Injectable()
export class AppService {
  constructor(private scopedService: ScopedService, private transientService: TransientService){
  }
  getHello(): string {
    return 'Hello World!';
  }
}
