import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up-main',
  templateUrl: './sign-up-main.component.html',
  styleUrl: './sign-up-main.component.scss'
})
export class SignUpMainComponent {
  //#region Properties
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  //#endregion

  //#region Handler methods
  public onSubmitHandler(): void {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      // Handle form submission
      console.log('Form Submitted');
    } else {
      console.log('Form is invalid');
    }
  }
  //#endregion
}
