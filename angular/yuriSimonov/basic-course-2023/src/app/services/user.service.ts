import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';

// lesson 43
@Injectable({
  providedIn: 'root',
})
export class BasicService {
  private httpInject = inject(HttpClient);

  constructor() {}
  // constructor(private http: HttpClient) {}
}

@Injectable({
  providedIn: 'root',
})
export class UserService extends BasicService {
  constructor() {
    super();
  }
  // constructor(http: HttpClient) {
  //   super(http);
  // }
}
