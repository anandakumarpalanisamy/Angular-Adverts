import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsComponent } from './adverts.component';
import { AdvertsRouterModule } from './adverts.router';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';
import { AdvertsInfoComponent } from './adverts-info/adverts-info.component';
import { AdvertsEditComponent } from './adverts-edit/adverts-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AdvertsRouterModule
  ],
  declarations: [AdvertsComponent, AdvertsListComponent, AdvertsInfoComponent, AdvertsEditComponent]
})
export class AdvertsModule { }
