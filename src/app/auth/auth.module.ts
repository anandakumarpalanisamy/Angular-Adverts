import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleModule } from '../ui/title/title.module';
import { LoginComponent } from './login/login.component';
import { AuthRouterModule } from './auth.router';

@NgModule({
  imports: [
    CommonModule,
    TitleModule,
    ReactiveFormsModule,
    AuthRouterModule
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
