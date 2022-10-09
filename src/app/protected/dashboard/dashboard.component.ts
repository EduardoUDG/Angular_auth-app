import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
    * {
      margin: 15px;
    }
    button {
      padding: 10px 25px;
      border-radius: 0.25rem;
      background-color: #000;
      color: #fff;
    }
    `
  ]
})
export class DashboardComponent {


  get user() {
    return this._authService.user;
  }

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  logout():void {
    this._router.navigateByUrl('/auth/login');
    this._authService.logout();
  }

}
