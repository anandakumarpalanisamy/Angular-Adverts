import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploaderComponent } from './image-uploader.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  declarations: [ImageUploaderComponent],
  exports: [ImageUploaderComponent]
})
export class ImageUploaderModule { }
