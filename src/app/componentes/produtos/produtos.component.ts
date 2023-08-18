import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalProdutosComponent } from '../modal-produtos/modal-produtos.component';
import { ListaProdutosService } from 'src/app/services/lista-produtos.service';
import { Interface } from '../interface';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private service: ListaProdutosService
  ) {}

  itens: Interface[] = [];

  ngOnInit(): void {
    this.service.getProdutos().subscribe({
      next: (itens) => {
       this.itens = itens;
        console.log(itens);

      },
      error: (error) => {
        console.error('Erro ao buscar os itens:', error);
      },
    });
  }

  chamaApi() {
    const x = this.service.getProdutos().subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalProdutosComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialogo fechado!');
    });
  }
}
