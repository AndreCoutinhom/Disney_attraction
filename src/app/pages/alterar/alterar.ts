import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../core/types/types';
import { ClientesService } from '../../core/services/clientes';
import { Atracao } from '../../core/types/types';
import { AtracoesService } from '../../core/services/atracoes';

@Component({
  selector: 'app-alterar',
  standalone: true, // <-- importante em standalone
  templateUrl: './alterar.html',
  styleUrls: ['./alterar.css'],
  imports: [CommonModule, ReactiveFormsModule], // <-- Adicionar ReactiveFormsModule aqui
})
export class Alterar {
  form!: FormGroup;
  idCliente!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.idCliente = String(this.route.snapshot.paramMap.get('id'));

    //Cria um objeto do tipo formulário com os campos vazios (nome, email e telefone)
    this.form = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      cpf: [''],
      checkin: [''],
      checkout: [''],
      hospedes: [''],
      quartos: ['']
    });

    //Chama o serviço que vai buscar os dados do cliente pelo ID na API (GET /clientes/:id).
    this.clientesService.buscarPorId(this.idCliente).subscribe(cliente => {
      //Se o cliente foi encontrado, atualiza os valores do formulário com os dados do cliente encontrado.
      if (cliente) {
        this.form.patchValue({
          nome: cliente.nome,
          email: cliente.email,
          telefone: cliente.telefone,
          cpf: cliente.cpf,
          checkin: cliente.checkin,
          checkout: cliente.checkout,
          hospedes: cliente.hospedes
        });
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const clienteAtualizado: Cliente = {
        id: this.idCliente, //pega o ID obtido da URL e que está em this.idCliente
        ...this.form.value //pega o conteúdos dos campos do form e carrega no objetoclienteAtualizado
      };

      /* vai gerar algo como mostrado abaixo e armazenar em clienteAtualizado
      {
        id: 5,     // Capturado da URL (não vem do formulário!)
        nome: "João",
        email: "joao@email.com",
        telefone: "12345-6789"
      }
      */

      this.clientesService.editar(clienteAtualizado).subscribe(() => {
        this.router.navigate(['/listar']);
      });
    }
  }
}