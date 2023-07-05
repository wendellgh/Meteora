import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { FacilidadesComponent } from './componentes/facilidades/facilidades.component';
import { NewsComponent } from './componentes/news/news.component';
import { ModalProdutosComponent } from './componentes/modal-produtos/modal-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ProdutosComponent,
    BannerComponent,
    CategoriasComponent,
    FacilidadesComponent,
    NewsComponent,
    ModalProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
