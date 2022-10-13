import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AldeanosPage } from './aldeanos.page';

const routes: Routes = [
  {
    path: '',
    component: AldeanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AldeanosPageRoutingModule {}
