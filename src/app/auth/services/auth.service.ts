import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
          if( resp.ok ) {
            this._user = { name: resp.name!, uid:resp.uid! }
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(false) )
      );
  }

}
