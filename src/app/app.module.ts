import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stuff',
    pathMatch: 'full'
  },
  {
    path: 'stuff',
    loadChildren: 'app/stuff/stuff.module#StuffModule'
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    DataTablesModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
