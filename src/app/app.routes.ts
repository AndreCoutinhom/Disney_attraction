import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Cadastrar } from './pages/cadastrar/cadastrar';
import { Consultar } from './pages/consultar/consultar';
import { Alterar } from './pages/alterar/alterar';
import { Excluir } from './pages/excluir/excluir';
import { Listar } from './pages/listar/listar';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'cadastrar', component: Cadastrar },
  { path: 'consultar', component: Consultar },
  { path: 'alterar/:id', component: Alterar },
  { path: 'excluir', component: Excluir },
  { path: 'listar', component: Listar },
  { path: '**', redirectTo: 'main' }
];