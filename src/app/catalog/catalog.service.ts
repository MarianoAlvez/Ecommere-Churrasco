import { AuthService } from './../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private baseUrl = environment.API_PRODUCT;
  products$ = this.getAll();

  constructor(private httpClient: HttpClient, private authService :AuthService) {}

  getAll(): Observable<Product[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') ,
    })
    return this.httpClient.get<Product[]>(`${this.baseUrl}`, {headers : headers});
  }

  getProduct(requestId: number): Observable<Product | null> {
    return this.httpClient
      .get<Product>(`${this.baseUrl}/${requestId}`)
      .pipe(
        catchError((error) => {
          if (error.status === 404) {
            return of(null);
          }

          return throwError(error);
        })
      );
  }
}
