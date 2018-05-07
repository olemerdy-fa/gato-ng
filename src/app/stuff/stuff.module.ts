import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { StuffListComponent } from './stuff-list/stuff-list.component';

import { StuffRoutingModule } from './stuff-routing.module';

@NgModule({
  imports: [
    SharedModule,
    StuffRoutingModule,
    MatTableModule
  ],
  declarations: [StuffListComponent]
})
export class StuffModule {
}
