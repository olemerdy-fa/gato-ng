import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StuffListComponent } from './stuff-list/stuff-list.component';

import { StuffRoutingModule } from './stuff-routing.module';

@NgModule({
  imports: [
    SharedModule,
    StuffRoutingModule
  ],
  declarations: [StuffListComponent]
})
export class StuffModule {
}
