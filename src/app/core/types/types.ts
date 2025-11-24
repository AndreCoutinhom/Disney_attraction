export interface Cliente {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  cpf:string;
  checkin:string;
  checkout:string;
  hospedes:string;
  quartos:string
}
export interface Atracao {
  id?: string;
  nome: string;
  convidados: string;
  dia: string;

}