import { Component, OnInit } from '@angular/core';

import { ModalProdutosComponent } from '../modal-produtos/modal-produtos.component';
import { ListaProdutosService } from 'src/app/services/lista-produtos.service';
import { Produtos } from '../interface_produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  constructor(private service: ListaProdutosService) {}

  itens: Produtos[] = [];

  ngOnInit(): void {
    this.service.getProdutos().subscribe({
      next: (itens) => {
        this.itens = itens;
      },
      error: (error) => {
        console.error('Erro ao buscar os itens:', error);
      },
    });
  }

  teste(){
    alert('Oi,teste')
  }


}
