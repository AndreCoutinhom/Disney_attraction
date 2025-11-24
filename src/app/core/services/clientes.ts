import { Injectable } from '@angular/core';
import { Cliente } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private readonly API = 'http://localhost:3000/clientes';
  
  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }


  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente);
  }

    excluir(id: string): Observable<Cliente> {
    return this.http.delete<Cliente>(this.API + `/${id}`);
  }

    editar(cliente: Cliente): Observable<Cliente> {
    const url = `${this.API}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }

    buscarPorId(id: string): Observable<Cliente | undefined> {
    return this.http.get<Cliente>(this.API + `/${id}`);
  }

}

