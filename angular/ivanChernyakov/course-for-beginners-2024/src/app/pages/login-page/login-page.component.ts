import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService: AuthService = inject(AuthService);
  router = inject(Router);

  // iCherniakov;
  // C4TaAro6Cg;

  isPasswordVisible = signal<boolean>(false);

  form: FormGroup = new FormGroup({
    password: new FormControl<string | null>(null, Validators.required),
    username: new FormControl<string | null>(null, Validators.required),
  });

  onSubmit(): void {
    if (this.form.valid) {
      // @ts-ignore
      this.authService.login(this.form.value).subscribe((res) => {
        this.router.navigate(['']);
      });
    }
  }
}
