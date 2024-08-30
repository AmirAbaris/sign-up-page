import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { RouterModule, Routes } from '@angular/router';
import { SignUpMainComponent } from '../../components/sign-up/sign-up-main/sign-up-main.component';
import { PasswordFormComponent } from '../../components/shared/password-form/password-form.component';

const routes: Routes = [
  { path: '', component: SignUpMainComponent }
];

@NgModule({
  declarations: [SignUpMainComponent],
  imports: [RouterModule.forChild(routes), FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, PasswordFormComponent]
})
export class SignUpModule { }
