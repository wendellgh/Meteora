import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaProdutosService {

  constructor(private http: HttpClient) { }

  // http://localhost:3333/produtos
}
