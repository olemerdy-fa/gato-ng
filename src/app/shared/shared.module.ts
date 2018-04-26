import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MomentPipe } from './moment.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MomentPipe
  ],
  declarations: [
    MomentPipe
  ]
})
export class SharedModule {
}
