import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserIndexComponent } from './user-index/user-index.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    UserCardComponent,
    UserIndexComponent
  ]
})
export class UserModule {
}
