import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuffListComponent } from './stuff-list/stuff-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: StuffListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StuffRoutingModule {
}
