import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppBaseComponent } from './app-base/app-base.component';


const routes: Routes = [
  { path: 'base', component: AppBaseComponent },
  { path: 'dialog', loadChildren: () => import('./dialog/dialog.module').then(m => m.DialogModule) },
  { path: 'cva', loadChildren: () => import('./cva/cva.module').then(m => m.CvaModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
