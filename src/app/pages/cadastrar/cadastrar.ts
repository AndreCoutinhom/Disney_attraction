import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../../core/types/types';
import { ClientesService } from '../../core/services/clientes';
import { Atracao } from '../../core/types/types';
import { AtracoesService } from '../../core/services/atracoes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css',
})
export class Cadastrar {
  titulo = 'Cadastro de clientes e atrações';

  // Primeira tabela
  cliente: Cliente = {} as Cliente;

  // Segunda tabela
  atracao: Atracao = {} as Atracao;

  constructor(
    private clientesService: ClientesService,
    private atracoesService: AtracoesService,
    private router: Router
  ) {}

  submeter() {
    // Salva cliente
    this.clientesService.salvar(this.cliente).subscribe(() => {
      // Após salvar o cliente, salva a atração
      this.atracoesService.salvar(this.atracao).subscribe(() => {
        // Após salvar nas duas tabelas, redireciona
        this.router.navigate(['/listar']);
      });
    });
  }
}

