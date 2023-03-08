import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewqrPage } from './viewqr.page';

const routes: Routes = [
  {
    path: '',
    component: ViewqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewqrPageRoutingModule {}
