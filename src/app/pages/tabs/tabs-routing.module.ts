import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'aldeanos',
        loadChildren: () => import('./aldeanos/aldeanos.module').then( m => m.AldeanosPageModule)
      },
      {
        path: 'herramientas',
        loadChildren: () => import('./herramientas/herramientas.module').then( m => m.HerramientasPageModule)
      },
      {
        path: 'insectos',
        loadChildren: () => import('./insectos/insectos.module').then( m => m.InsectosPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
]


  


  

      
    
    
  




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
