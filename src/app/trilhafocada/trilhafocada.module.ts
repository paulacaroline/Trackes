import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrilhafocadaPageRoutingModule } from './trilhafocada-routing.module';

import { TrilhafocadaPage } from './trilhafocada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrilhafocadaPageRoutingModule
  ],
  declarations: [TrilhafocadaPage]
})
export class TrilhafocadaPageModule {}
