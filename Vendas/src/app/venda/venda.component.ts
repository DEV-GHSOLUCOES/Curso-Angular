import { VendaServicoService } from './servico/venda-servico.service';
import { ClienteServicoService } from './../cliente/servico/cliente-servico.service';
import { Cliente } from './../cliente/servico/cliente';
import { Venda } from './servico/venda';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  venda: Venda = new Venda();
  selecionado: Venda;

  listaVenda: Venda[] = [];

  listaCliente: Cliente[] = [];
  
  constructor(
    private router: Router,
    private vendaServicoService: VendaServicoService,
    private clienteServicoService: ClienteServicoService

  ) { }

  ngOnInit(): void {

    this.clienteServicoService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    let codigoCliente = '';
    if(this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaServicoService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
        
      }
    );
  }

  pesquisar(){
    
    let codigoCliente = '';
    if(this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaServicoService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
        
      }
    );   
  }

  incluir(){    
    this.router.navigate(['/venda/incluir']);
  }

  

  remover(){

    this.vendaServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor){
    this.selecionado = valor;    
  }

}
