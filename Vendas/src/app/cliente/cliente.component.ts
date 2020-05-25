import { ClienteServicoService } from './servico/cliente-servico.service';
import { Router } from '@angular/router';
import { Cliente } from './servico/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  listaCliente: Cliente[] = []; 

  cliente: Cliente = new Cliente();

  nome: string = '';


  selecionado: Cliente;
  constructor(private router: Router,
    private clienteServicoService: ClienteServicoService) { }

  ngOnInit(): void {
  }



  pesquisar(){
    
    this.clienteServicoService.pesquisar(this.nome).subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
        console.log(this.listaCliente);
      }
    );

  }

  incluir(){

    this.router.navigate(['cliente/incluir']);
    

  }

  selecionar(cliente){
    this.selecionado = cliente;
  }

  alterar(){
    this.router.navigate(['/cliente/alterar/' + this.selecionado.nome]);
  }

  excluir(){
    this.clienteServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    )
  }
 
}
