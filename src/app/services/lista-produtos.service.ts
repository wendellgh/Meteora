import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Interface } from '../componentes/interface';

@Injectable({
  providedIn: 'root',
})
export class ListaProdutosService {
  private readonly mock_Api = 'http://localhost:3333/produtos';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Interface[]>{
   return this.http.get<Interface[]>(this.mock_Api).pipe(
      tap(resultado => console.log(resultado))
    )

  }
}


// json-server --watch db.json --port 3333
