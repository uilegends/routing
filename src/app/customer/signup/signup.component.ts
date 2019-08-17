import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent {

  signup = new FormGroup({
    fullname: new FormControl('Ramesh', Validators.required),
    credentials: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        this.spaceNotAllowed
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })

  });

  get fullname() { return this.signup.get('fullname'); }
  get username() { return this.signup.get('credentials.username'); }
  get email() { return this.signup.get('credentials.email'); }
  get password() { return this.signup.get('credentials.password'); }



  onSubmit() {
    console.log(this.signup);
  }

  spaceNotAllowed(control: AbstractControl): { [s: string]: boolean } | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { spaceNotAllowed: true }

    return null
  }



}
