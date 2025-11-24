import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../core/types/types';
import { Atracao } from '../../core/types/types';
import { ClientesService } from '../../core/services/clientes';
import { AtracoesService } from '../../core/services/atracoes';

@Component({
  selector: 'app-consultar',
  standalone: true,
  templateUrl: './consultar.html',
  styleUrls: ['./consultar.css'],
  imports: [CommonModule, FormsModule],
})
export class Consultar {

  // ======== CLIENTES =========
  idBuscaCliente: string | null = null;
  clienteEncontrado: Cliente | null = null;
  erroBuscaCliente: string = '';

  // ======== ATRACOES =========
  idBuscaAtracao: string | null = null;
  atracaoEncontrada: Atracao | null = null;
  erroBuscaAtracao: string = '';

  constructor(
    private clientesService: ClientesService,
    private atracoesService: AtracoesService
  ) {}

  // ======== BUSCAR CLIENTE =========
  buscarCliente(): void {
    this.erroBuscaCliente = '';
    this.clienteEncontrado = null;

    if (this.idBuscaCliente != null) {
      this.clientesService.buscarPorId(this.idBuscaCliente).subscribe({
        next: (cliente) => {
          if (cliente) {
            this.clienteEncontrado = cliente;
          } else {
            this.erroBuscaCliente = 'Cliente não encontrado.';
          }
        },
        error: () => {
          this.erroBuscaCliente = 'Erro ao buscar cliente.';
        },
      });
    }
  }

  // ======== BUSCAR ATRAÇÃO =========
  buscarAtracao(): void {
    this.erroBuscaAtracao = '';
    this.atracaoEncontrada = null;

    if (this.idBuscaAtracao != null) {
      this.atracoesService.buscarPorId(this.idBuscaAtracao).subscribe({
        next: (atracao) => {
          if (atracao) {
            this.atracaoEncontrada = atracao;
          } else {
            this.erroBuscaAtracao = 'Atração não encontrada.';
          }
        },
        error: () => {
          this.erroBuscaAtracao = 'Erro ao buscar atração.';
        },
      });
    }
  }
}
