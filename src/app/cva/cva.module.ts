import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvaRoutingModule } from './cva-routing.module';
import { CvaComponent } from './cva.component';


@NgModule({
  declarations: [
    CvaComponent
  ],
  imports: [
    CommonModule,
    CvaRoutingModule
  ]
})
export class CvaModule { }
