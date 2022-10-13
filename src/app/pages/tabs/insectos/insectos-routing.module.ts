import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsectosPage } from './insectos.page';

const routes: Routes = [
  {
    path: '',
    component: InsectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsectosPageRoutingModule {}
