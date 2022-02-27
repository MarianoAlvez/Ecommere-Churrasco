import { Token } from '@angular/compiler';
import { AuthService } from './../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private baseUrl = environment.URL_BASE;
  products$ = this.getAll();
  public product!: Product;

  constructor(private httpClient: HttpClient, private authService :AuthService) {}

  getAll(): Observable<Product[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') ,
    })
    return this.httpClient.get<Product[]>(`${this.baseUrl}:3005/products`, {headers : headers});
  }

  getProduct(requestId: number): Observable<Product | null> {
    return this.httpClient
      .get<Product>(`${this.baseUrl}:3000/addproduct ${requestId}`)
      .pipe(
        catchError((error) => {
          if (error.status === 404) {
            return of(null);
          }

          return throwError(error);
        })
      );
  }

  addProduct$(product: Product): Observable<Product> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') ,
    })
    console.log(localStorage.getItem('token'));
    console.log(product.pictures);
    return this.httpClient.post<Product>(`${this.baseUrl}:3000/addproduct`, product, {headers : headers});

  }

}
