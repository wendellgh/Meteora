import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { Interface } from '../componentes/interface';

@Injectable({
  providedIn: 'root',
})

// json-server --watch db.json --port 3333
export class ListaProdutosService {
  private readonly mock_Api = 'http://localhost:3333/produtos';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Interface[]> {
    return this.http.get<Interface[]>(this.mock_Api).pipe(
      tap((retorno) => console.log('Vem do Tap', retorno)),
      map((resultado) =>
        resultado.map((item) => ({
          id: item.id,
          titulo: item.titulo,
          preco: item.preco,
          descricao: item.descricao,
          imagem: item.imagem,
        }))
      ),
      tap((r) => console.log('pos map', r))
    );
  }
}

