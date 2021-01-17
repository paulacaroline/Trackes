import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrilhaPage } from './trilha.page';

const routes: Routes = [
  {
    path: '',
    component: TrilhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrilhaPageRoutingModule {}
