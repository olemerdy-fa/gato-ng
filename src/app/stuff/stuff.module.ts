import { NgModule } from '@angular/core';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { StuffListComponent } from './stuff-list/stuff-list.component';

import { StuffRoutingModule } from './stuff-routing.module';

@NgModule({
  imports: [
    SharedModule,
    StuffRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: [StuffListComponent]
})
export class StuffModule {
}
