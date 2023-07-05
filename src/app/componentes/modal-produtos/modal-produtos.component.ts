import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-produtos',
  templateUrl: './modal-produtos.component.html',
  styleUrls: ['./modal-produtos.component.css']
})
export class ModalProdutosComponent implements OnInit{
  constructor(private router: Router){

  }
  ngOnInit(): void {}


}
