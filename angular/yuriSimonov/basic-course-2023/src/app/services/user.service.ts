import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers() {
    return of([
      {
        name: 'Вася',
      },
      {
        name: 'Маша',
      },
      {
        name: 'Катя',
      },
    ]);
  }
}
