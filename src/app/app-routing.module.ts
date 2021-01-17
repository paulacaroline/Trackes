import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'trilha',
    loadChildren: () => import('./trilha/trilha.module').then( m => m.TrilhaPageModule)
  },
  {
    path: 'trilhafocada',
    loadChildren: () => import('./trilhafocada/trilhafocada.module').then( m => m.TrilhafocadaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'notificacao',
    loadChildren: () => import('./notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
  },
  {
    path: 'desafios',
    loadChildren: () => import('./desafios/desafios.module').then( m => m.DesafiosPageModule)
  },
  {
    path: 'vagas',
    loadChildren: () => import('./vagas/vagas.module').then( m => m.VagasPageModule)
  },
  {
    path: 'comunidades',
    loadChildren: () => import('./comunidades/comunidades.module').then( m => m.ComunidadesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
