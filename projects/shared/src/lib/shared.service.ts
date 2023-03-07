import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  currentValue: number;

  constructor() {
    this.currentValue = 0;
  }

  increment() {
    this.currentValue++;
  }

  decrement() {
    this.currentValue--;
  }
}
