import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobremesasbebidasPage } from './sobremesasbebidas.page';

const routes: Routes = [
  {
    path: '',
    component: SobremesasbebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobremesasbebidasPageRoutingModule {}
