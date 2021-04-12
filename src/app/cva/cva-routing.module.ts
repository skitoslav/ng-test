import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvaComponent } from './cva.component';

const routes: Routes = [{ path: '', component: CvaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvaRoutingModule { }
