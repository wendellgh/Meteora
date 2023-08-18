import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalProdutosComponent } from './componentes/modal-produtos/modal-produtos.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '',
  // component:AppComponent,
  // pathMatch:'full'
  // },
  {
    path: 'modal',
    component: ModalProdutosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
