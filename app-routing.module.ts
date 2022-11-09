import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'HOME',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'Lanches',
    redirectTo: '/lanche',
    pathMatch: 'full'
  },
  {
    path: 'Entradas & Pratos',
    redirectTo: '/entradaspratos',
    pathMatch: 'full'
  },
  {
    path: 'Sobremesas & Bebidas',
    redirectTo: '/sobremesasbebidas',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lanches',
    loadChildren: () => import('./lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'entradaspratos',
    loadChildren: () => import('./entradaspratos/entradaspratos.module').then( m => m.EntradaspratosPageModule)
  },
  {
    path: 'sobremesasbebidas',
    loadChildren: () => import('./sobremesasbebidas/sobremesasbebidas.module').then( m => m.SobremesasbebidasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
