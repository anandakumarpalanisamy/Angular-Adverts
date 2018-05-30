import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfinityScrollDirective } from './infinity-scroll.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfinityScrollDirective],
  exports: [InfinityScrollDirective]
})
export class InfinityScrollModule { }
