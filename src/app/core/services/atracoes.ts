import { Injectable } from '@angular/core';
import { Atracao } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtracoesService {
  private readonly API = 'http://localhost:3000/atracoes';

  constructor(private http: HttpClient) {}
  
  listar(): Observable<Atracao[]> {
    return this.http.get<Atracao[]>(this.API);
  }
  
    salvar(atracao: Atracao): Observable<Atracao> {
      return this.http.post<Atracao>(this.API, atracao);
    }
        excluir(id: string): Observable<Atracao> {
        return this.http.delete<Atracao>(this.API + `/${id}`);
      }
    
        editar(atracao: Atracao): Observable<Atracao> {
        const url = `${this.API}/${atracao.id}`
        return this.http.put<Atracao>(url, atracao)
      }
    
        buscarPorId(id: string): Observable<Atracao | undefined> {
        return this.http.get<Atracao>(this.API + `/${id}`);
      }
}
