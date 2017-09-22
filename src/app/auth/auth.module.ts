import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "app/auth/auth-routing.module";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
