import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, EMPTY, Observable, throwError } from 'rxjs';
import { LoginCredentials } from './login/login-credentials';
import { environment } from '../../environments/environment';
import { SuccessfulLoginDto } from './successful-login.dto';
import { catchError, ignoreElements, tap } from 'rxjs/operators';
import { InvalidCredentialsError } from './errors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.URL_BASE;
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  private _authToken: string | null = null;
  public get authToken(): string | null {
    return this._authToken;
  }

  constructor(private router: Router, private httpClient: HttpClient) {}

  logIn(credentials: LoginCredentials): Observable<never> {
    return this.httpClient
      .post<SuccessfulLoginDto>(`${this.baseUrl}:3005/login`, credentials)
      .pipe(
        tap(({ token }) => this.handleSuccesfulLogin(token)),
        ignoreElements(),
        catchError((error) => {
            if (error.status === 401) {
              return throwError(new InvalidCredentialsError());
            }

          alert('Se ha producido un error. Intentelo de nuevo más tarde.');//agregar servicio de notificaciones
          return EMPTY;
        })
      );
  }

  logOut(): void {
    this.loggedIn.next(false);
    this._authToken = null;
    localStorage.clear();
    this.redirectToHome();
  }

  private handleSuccesfulLogin(token: string): void {
    this.loggedIn.next(true);
    this._authToken = token;
    localStorage.setItem('token', this.authToken! );
    this.redirectToHome();
  }

  private redirectToHome(): void {
    this.router.navigate(['catalog']);
  }
}
