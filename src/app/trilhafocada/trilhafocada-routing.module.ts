import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrilhafocadaPage } from './trilhafocada.page';

const routes: Routes = [
  {
    path: '',
    component: TrilhafocadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrilhafocadaPageRoutingModule {}
