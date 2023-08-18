import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalProdutosComponent } from '../modal-produtos/modal-produtos.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  
  constructor(private dialog: MatDialog){}
  ngOnInit(): void {}

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalProdutosComponent, {width:'550px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialogo fechado!");

    })
  }

}
