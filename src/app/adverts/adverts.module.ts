import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsComponent } from './adverts.component';
import { AdvertsRouterModule } from './adverts.router.module';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';
import { AdvertsInfoComponent } from './adverts-info/adverts-info.component';
import { AdvertsEditComponent } from './adverts-edit/adverts-edit.component';
import { InfinityScrollModule } from '../ui/infinity-scroll/infinity-scroll.module';
import { AdvertsEmptyComponent } from './adverts-empty/adverts-empty.component';

@NgModule({
  imports: [
    CommonModule,
    AdvertsRouterModule,
    InfinityScrollModule
  ],
  declarations: [AdvertsComponent, AdvertsListComponent, AdvertsInfoComponent, AdvertsEditComponent, AdvertsEmptyComponent]
})
export class AdvertsModule { }
