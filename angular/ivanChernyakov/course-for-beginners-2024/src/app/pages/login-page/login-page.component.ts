import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { AuthForm } from '../../auth/interfaces/auth-form';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService: AuthService = inject(AuthService);

  form: FormGroup = new FormGroup<AuthForm>({
    password: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
  });

  onSubmit(): void {
    if (this.form.valid) {
      console.log('this.form.value :>> ', this.form.value);
      //@ts-ignore
      this.authService.login(this.form.value);
    }
  }
}
