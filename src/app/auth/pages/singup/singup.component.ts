import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styles: [
  ]
})
export class SingupComponent implements OnInit {

  myForm: FormGroup = this._fb.group({
    name: ['eduardo', [Validators.required]],
    email: ['eduardo@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  // inputValidate( inputName: string ): boolean {
  //   return this.myForm.get(inputName)?.invalid
  //       && this.myForm.get(inputName)?.touched || true;
  // }

  register():void {
    if( this.myForm.invalid ) {
      return;
    }
    console.log(this.myForm.value);
    const { name, email, password } = this.myForm.value;
    this._authService.signUp(name, email, password)
    .subscribe( ok => { // return true or error message
      if( ok === true ) {
        this._router.navigateByUrl('/dashboard')
      } else {
        Swal.fire('Error', ok, 'error'); // Show error alert
      }
    });
    // end auth service
  }
}
