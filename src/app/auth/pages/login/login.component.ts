import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this._fb.group({
    email: ['eduardo@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  // inputValidate( inputName: string ): boolean {
  //   return this.myForm.get(inputName)?.invalid
  //       && this.myForm.get(inputName)?.touched || true;
  // }

  login():void {
    if( this.myForm.invalid ) {
      console.log('Formulario invalido');
      return;
    }
    console.log(this.myForm.value);
  }

}
