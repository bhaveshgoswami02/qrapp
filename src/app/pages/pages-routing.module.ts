import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    // redirectTo: 'scanqr',
    // pathMatch: 'full'
    children: [
      {
        path: '',
        redirectTo: 'viewqr',
        pathMatch: 'full'
      },    
      {
        path: 'scanqr',
        loadChildren: () => import('./scanqr/scanqr.module').then( m => m.ScanqrPageModule)
      },
      {
        path: 'viewqr',
        loadChildren: () => import('./viewqr/viewqr.module').then( m => m.ViewqrPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
