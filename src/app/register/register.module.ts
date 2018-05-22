import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRouterModule } from './register.router';
import { TitleModule } from '../ui/title/title.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RegisterRouterModule,
    TitleModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
