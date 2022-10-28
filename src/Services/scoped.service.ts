import { Injectable, Scope } from '@nestjs/common';

@Injectable({
    scope: Scope.REQUEST
})
export class ScopedService {
  constructor() { console.log("Scoped service instance created") }
}