import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _http: HttpClient ) { }

  login( email:string, password:string ) {
    const url = `${environment.BASE_URL}/auth`;
    const body = { email, password };

    return this._http.post<AuthResponse>(url, body);
  }

}
