import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { StuffRoutingModule } from './stuff-routing.module';
import { StuffListComponent } from './stuff-list/stuff-list.component';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    StuffRoutingModule
  ],
  declarations: [StuffListComponent]
})
export class StuffModule { }
