import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter: number = 0;

  counterChanged = new EventEmitter<any>();

  constructor() { }
}
