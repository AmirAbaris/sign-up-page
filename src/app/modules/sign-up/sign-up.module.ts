import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpMainComponent } from '../../components/sign-up/sign-up-main/sign-up-main.component';

const routes: Routes = [
  { path: '', component: SignUpMainComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class SignUpModule { }
