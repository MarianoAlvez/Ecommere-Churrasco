import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [ Validators.required]),
    password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
  });

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private authService: AuthService,
              private router: Router) {}

  signIn(): void {
    const credentials = this.loginForm.value;
    this.loginForm.markAsPending();
    this.authService.logIn(credentials).subscribe({
      error: () => this.loginForm.setErrors({ invalidCredentials: true }),
    });

    
  }
}

