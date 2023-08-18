import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Produtos } from '../componentes/interface_produtos';

@Injectable({
  providedIn: 'root',
})

// json-server --watch db.json --port 3333
export class ListaProdutosService {
  private readonly mock_Api = 'http://localhost:3333/produtos';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.mock_Api).pipe(
      map((resultado) =>
        resultado.map((item) => ({
          id: item.id,
          titulo: item.titulo,
          preco: item.preco,
          descricao: item.descricao,
          imagem: item.imagem,
        }))
      )
    );
  }
}
