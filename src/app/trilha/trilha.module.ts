import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrilhaPageRoutingModule } from './trilha-routing.module';

import { TrilhaPage } from './trilha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrilhaPageRoutingModule
  ],
  declarations: [TrilhaPage]
})
export class TrilhaPageModule {}
