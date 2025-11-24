import { Component, OnInit } from '@angular/core';
import { Atracao, Cliente } from '../../core/types/types';
import { ClientesService } from '../../core/services/clientes';
import { AtracoesService } from '../../core/services/atracoes';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar.html',
  styleUrls: ['./listar.css']
})
export class Listar implements OnInit {

  // 🔹 Tabela 1
  listaClientes: Cliente[] = [];

  // 🔹 Tabela 2
  listaAtracoes: Atracao[] = [];

  constructor(
    private clientesService: ClientesService,
    private atracoesService: AtracoesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarClientes();
    this.carregarAtracoes();
  }

  // ============================
  // 🔹 CLIENTES
  // ============================

  carregarClientes(): void {
    this.clientesService.listar().subscribe((clientes) => {
      this.listaClientes = clientes;
    });
  }

  excluirCliente(id: string): void {
    if (id) {
      this.clientesService.excluir(id).subscribe(() => {
        this.listaClientes = this.listaClientes.filter(c => c.id !== id);
      });
    }
  }

  // ============================
  // 🔹 PRODUTOS
  // ============================

  carregarAtracoes(): void {
    this.atracoesService.listar().subscribe((atracoes) => {
      this.listaAtracoes = atracoes;
    });
  }

  excluirAtracao(id: string): void {
    if (id) {
      this.atracoesService.excluir(id).subscribe(() => {
        this.listaAtracoes = this.listaAtracoes.filter(p => p.id !== id);
      });
    }
  }
}
