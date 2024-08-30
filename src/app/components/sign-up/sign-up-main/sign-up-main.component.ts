import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
export class SignUpMainComponent implements OnInit {
  //#region Properties
  private _fb = inject(FormBuilder);

  public matcher = new MyErrorStateMatcher();
  public signUpForm: FormGroup | undefined;
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this.initializeForm();
  }
  //#endregion

  //#region Handler methods
  public onSubmitHandler(): void {
    if (!this.signUpForm) return;

    if (this.signUpForm.valid) {
      // Handle form submission
      console.log('Form Submitted', this.signUpForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  private initializeForm(): void {
    this.signUpForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  //#endregion
}
