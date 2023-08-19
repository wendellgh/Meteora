import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { FacilidadesComponent } from './componentes/facilidades/facilidades.component';
import { NewsComponent } from './componentes/news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosModalComponent } from './componentes/produtos-modal/produtos-modal.component';



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
    ProdutosModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
