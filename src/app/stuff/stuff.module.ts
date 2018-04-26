import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { StuffListComponent } from './stuff-list/stuff-list.component';

import { StuffRoutingModule } from './stuff-routing.module';

@NgModule({
  imports: [
    DataTablesModule,
    SharedModule,
    StuffRoutingModule
  ],
  declarations: [StuffListComponent]
})
export class StuffModule {
}
