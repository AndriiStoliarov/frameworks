import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // lesson 45
  constructor(private http: HttpClient) {
    console.log('DataService');
  }

  getData() {
    return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }
  // lesson 44
  // constructor(private http: HttpClient) {}

  // getData() {
  //   return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  // }
  //* сервисы это тоже классы, которые имеют свой собственный декоратор - @Injectable

  // private _data: string[] = ['One', 'Two', 'Three'];

  // constructor(private http: HttpClient) {}

  // getData() {
  //   return this._data;
  // }

  // getUsers() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }
}
