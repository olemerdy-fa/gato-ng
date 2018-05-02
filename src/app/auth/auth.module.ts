import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    CallbackComponent
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService
      ]
    };
  }
}
