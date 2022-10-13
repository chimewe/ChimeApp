import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AldeanosPageRoutingModule } from './aldeanos-routing.module';
import { AldeanosPage } from './aldeanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AldeanosPageRoutingModule
  ],
  declarations: [AldeanosPage]
})
export class AldeanosPageModule {}
