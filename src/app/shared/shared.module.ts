import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from './components/field-error/field-error.component';

@NgModule({
  declarations: [
    FieldErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    FieldErrorComponent,
  ]
})
export class SharedModule { }
