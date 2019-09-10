import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = environment.server;
  }

  public postLogin(): Observable<any> {
    let user;
    return this.http.post(this.baseURL, user)
      .pipe(
        map((response) => response as any),
        catchError((error) => this.handleError('Login', error))
      );
  }

  private handleError(message: string, error: any): Observable<any> {
    console.error('Request Error - ' + message, error);
    return throwError(error);
  }
}
