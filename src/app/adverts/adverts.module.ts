import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsComponent } from './adverts.component';
import { AdvertsRouterModule } from './adverts.router.module';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';
import { AdvertsInfoComponent } from './adverts-info/adverts-info.component';
import { AdvertsEditComponent } from './adverts-edit/adverts-edit.component';
import { InfinityScrollModule } from '../ui/infinity-scroll/infinity-scroll.module';
import { AdvertsEmptyComponent } from './adverts-empty/adverts-empty.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdvertsCreateComponent } from './adverts-create/adverts-create.component';
import { AdvertEditFormComponent } from './shared/advert-edit-form/advert-edit-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageUploaderModule } from '../ui/image-uploader/image-uploader.module';
import { TitleModule } from '../ui/title/title.module';
import { EditorGuard } from './shared/guards/editor.guard';

const GUARD_PROVIDERS = [
  EditorGuard
];

@NgModule({
  imports: [
    CommonModule,
    AdvertsRouterModule,
    InfinityScrollModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ImageUploaderModule,
    TitleModule
  ],
  declarations: [
    AdvertsComponent,
    AdvertsListComponent,
    AdvertsInfoComponent, 
    AdvertsEditComponent,
    AdvertsEmptyComponent,
    AdvertsCreateComponent,
    AdvertEditFormComponent
  ], 
  providers: []
})
export class AdvertsModule { }
