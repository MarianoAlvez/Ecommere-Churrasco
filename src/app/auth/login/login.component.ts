import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('challenge', [ Validators.required]),
    password: new FormControl('ch411enge', [ Validators.required, Validators.minLength(6) ]),
  });

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private authService: AuthService) {}

  signIn(): void {
    const credentials = this.loginForm.value;
    this.loginForm.markAsPending();
    this.authService.logIn(credentials).subscribe({
      error: () => this.loginForm.setErrors({ invalidCredentials: true }),
    });
  }
}

