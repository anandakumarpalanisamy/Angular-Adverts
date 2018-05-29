import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AuthButtonsComponent } from './auth-buttons/auth-buttons.component';
import { ActionMenuComponent } from './action-menu/action-menu.component';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  declarations: [HeaderComponent, AuthButtonsComponent, ActionMenuComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
