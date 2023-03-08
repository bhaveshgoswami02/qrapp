import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewqrPageRoutingModule } from './viewqr-routing.module';

import { ViewqrPage } from './viewqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewqrPageRoutingModule,
  ],
  declarations: [ViewqrPage],
  providers: [
  ]
})
export class ViewqrPageModule {}
