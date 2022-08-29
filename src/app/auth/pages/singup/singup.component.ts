import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  // inputValidate( inputName: string ): boolean {
  //   return this.myForm.get(inputName)?.invalid
  //       && this.myForm.get(inputName)?.touched || true;
  // }

  register():void {
    if( this.myForm.invalid ) {
      console.log('Formulario invalido');
      return;
    }
    console.log(this.myForm.value);
  }
}
