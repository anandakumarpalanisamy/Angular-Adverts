import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsComponent } from './adverts.component';
import { AdvertsRouterModule } from './adverts.router';

@NgModule({
  imports: [
    CommonModule,
    AdvertsRouterModule
  ],
  declarations: [AdvertsComponent]
})
export class AdvertsModule { }
