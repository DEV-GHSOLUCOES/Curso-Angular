
import { Router } from '@angular/router';
import { ClienteServicoService } from './../../cliente/servico/cliente-servico.service';
import { ProdutoServicoService } from './../../produto/servico/produto-servico.service';
import { VendaServicoService } from './../servico/venda-servico.service';
import { Cliente } from './../../cliente/servico/cliente';
import { VendaItem } from './../servico/vendaitem';
import { Venda } from './../servico/venda';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto/servico/produto';









@Component({
  selector: 'app-vendamanter',
  templateUrl: './vendamanter.component.html',
  styleUrls: ['./vendamanter.component.scss']
})
export class VendamanterComponent implements OnInit {

  operacao: string = 'Incluir';

  venda: Venda = new Venda();

  vendaItem: VendaItem = new VendaItem();

  listaProduto: Produto[] = [];
  listaCliente: Cliente[] = [];



  constructor(    
    private router: Router,
    private vendaServicoService: VendaServicoService,
    private produtoServicoService: ProdutoServicoService,
    private clienteServicoService: ClienteServicoService
  ) { }

  ngOnInit(): void { 
    
    this.clienteServicoService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );
    
    this.produtoServicoService.pesquisar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );
  }

  voltar(){
    this.router.navigate(['/venda']);
  }

  incluir(){
    this.vendaServicoService.incluir(this.venda).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/venda']);        
      }
    );
  }
  
  adicionar(){

    this.venda.listaVendaItem.push(this.vendaItem);
    this.vendaItem = new VendaItem();

  }

  removerProduto(vendaItem){

    this.venda.listaVendaItem = this.venda.listaVendaItem.filter(obj => obj !== vendaItem);

  } 

}