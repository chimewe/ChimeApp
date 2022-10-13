import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsectosPageRoutingModule } from './insectos-routing.module';
import { InsectosPage } from './insectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsectosPageRoutingModule
  ],
  declarations: [InsectosPage]
})
export class InsectosPageModule {}
