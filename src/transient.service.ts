import { Injectable, Scope } from '@nestjs/common';

@Injectable({
    scope:Scope.TRANSIENT
})
export class TransientService {
  constructor() { console.log("Transient instance created") }
}