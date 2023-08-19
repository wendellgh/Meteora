import { Component, Input, OnInit } from '@angular/core';


import { ListaProdutosService } from 'src/app/services/lista-produtos.service';
import { Produtos } from '../interface_produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  constructor(private service: ListaProdutosService) {}

  @Input()itens: Produtos[] = [];
  modalAberto!: boolean;

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



  onModalChange(evento: boolean) {
    this.modalAberto = evento;
    console.log('Abrir modal');

  }


}
