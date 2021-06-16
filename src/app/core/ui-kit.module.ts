import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_MATERIAL } from './material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...NG_MATERIAL
  ],
  exports: [
    CommonModule,
    ...NG_MATERIAL,
  ],
})
export class UiKitModule {}
