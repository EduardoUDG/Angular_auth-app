import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl = environment.BASE_URL;
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor( private _http: HttpClient ) { }

  login( email:string, password:string ) {
    const url = `${this._baseUrl}/auth`;
    const body = { email, password };

    return this._http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp => {
          localStorage.setItem('token', resp.token!);
          if( resp.ok ) {
            this._user = { name: resp.name!, uid:resp.uid! }
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) ) // Error message
      );
  }


  validateToken() {
    const url = `${this._baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this._http.get(url, { headers });
  }


}
