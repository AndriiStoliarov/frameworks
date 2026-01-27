import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  randomNumber: number;

  constructor() {
    this.randomNumber = Math.floor(Math.random() * 100);
  }

  getRandomNumber() {
    return this.randomNumber;
  }
}
