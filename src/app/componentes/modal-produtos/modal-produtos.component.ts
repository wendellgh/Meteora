import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Interface } from '../interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-produtos',
  templateUrl: './modal-produtos.component.html',
  styleUrls: ['./modal-produtos.component.css'],
})
export class ModalProdutosComponent implements OnInit{

 private readonly API = 'http://localhost:3000/produtos';

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ModalProdutosComponent>,
    private http: HttpClient
  ) {}
  ngOnInit(): void {

  }

  // listar(): Observable<Interface[]>{
  //   // return this.http.get(this.API);

  // }

  cancel():void{
    this.dialogRef.close();
  }





}
