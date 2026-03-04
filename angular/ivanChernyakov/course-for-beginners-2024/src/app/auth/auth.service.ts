import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthForm } from './interfaces/auth-form';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  baseApiUrl: string = 'https://icherniakov.ru/yt-course/auth/';

  login(payload: { username: string; password: string }) {
    const fd: FormData = new FormData();

    fd.append('username', payload.username);
    fd.append('password', payload.password);

    return this.http.post<AuthForm>(`${this.baseApiUrl}token`, fd);
  }
}
