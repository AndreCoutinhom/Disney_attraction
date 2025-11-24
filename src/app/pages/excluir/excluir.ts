import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClientesService } from '../../core/services/clientes';
import { AtracoesService } from '../../core/services/atracoes';


@Component({
  selector: 'app-excluir',
  standalone: true,
  templateUrl: './excluir.html',
  styleUrls: ['./excluir.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class Excluir {
  
  idExcluir: string | null = null;

  // NOVO: para selecionar qual tabela excluir
  tipoTabela: 'clientes' | 'atracoes' | null = null;

  mensagemSucesso: string = '';
  erroMensagem: string = '';

  constructor(
    private clientesService: ClientesService,
    private atracoesService: AtracoesService,
    private router: Router  
  ) { }

  // 🔥 Função principal que escolhe qual tabela excluir
  excluir(): void {
    this.mensagemSucesso = '';
    this.erroMensagem = '';

    if (this.idExcluir == null || this.tipoTabela == null) {
      this.erroMensagem = 'Informe o ID e o tipo da tabela.';
      return;
    }

    if (this.tipoTabela === 'clientes') {
      this.excluirCliente();
    } else if (this.tipoTabela === 'atracoes') {
      this.excluirAtracao();
    }
  }

  // 🔥 Mantive exatamente sua função original
  excluirCliente(): void {
    this.clientesService.excluir(this.idExcluir!).subscribe({
      next: () => {
        this.router.navigate(['/listar']);
      },
      error: () => {
        this.erroMensagem = `Erro ao excluir o cliente.`;
      }
    });
  }

  // 🔥 Função clonada e adaptada para segunda tabela  
  excluirAtracao(): void {
    this.atracoesService.excluir(this.idExcluir!).subscribe({
      next: () => {
        this.router.navigate(['/listar']);
      },
      error: () => {
        this.erroMensagem = `Erro ao excluir a atração.`;
      }
    });
  }
}