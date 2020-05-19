import { Component, OnInit } from '@angular/core';

import { Produto } from './servico/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  titulo: string = 'Cadastro Produto';

  produto: Produto =  new Produto();

  listaProdutos: Produto[] =  [
     
    {codigo: '1', nome: 'Cimento',  descricao: 'Cimento Nassau',
   lote: 'Lote 1', valorCusto: '10.00', valorVenda: '20.00', dataValidade: '05/09/2030',
    tipo: 'Construcao'},

    {codigo: '2', nome: 'Ceramica',  descricao: 'Ceramica Nassau',
    lote: 'Lote 1', valorCusto: '10.00', valorVenda: '20.00', dataValidade: '05/09/2030',
     tipo: 'Construcao'}

  ];

  listaTipo: any[] = [

    {codigo: "ELETRO", nome: "Eletrodoméstico"}, 
    {codigo: "CONSTRU", nome: "Construção"},
    {codigo: "ALIMENT", nome: "Alimenticio"}
  
  
  
  ];

  mostrarButtonSalvar: boolean = false ;

  mostrarCadastroProduto: boolean = false;
  


  constructor() { }

  ngOnInit(): void {
  }

  incluir(){


    this.listaProdutos.push(this.produto);
    this.produto = new Produto();



}

alterar(produto){
  this.produto = produto;
  console.log('Produto', this.produto);
  this.mostrarButtonSalvar = true;
  


  
}

salvarAlteracao(){
  this.produto = new Produto();
  this.mostrarButtonSalvar = false;
}


excluir(produto){
  this.listaProdutos = this.listaProdutos.filter(
     obj => obj !== produto
   );
 }


 imprimir(){
  alert( `${this.produto.codigo }
          ${this.produto.nome }
          ${this.produto.descricao }
          ${this.produto.lote }
          ${this.produto.valorCusto }
          ${this.produto.valorVenda }
          ${this.produto.dataValidade }
          ${this.produto.tipo }`);
}




cadastroProduto(){

  this.mostrarCadastroProduto = !this.mostrarCadastroProduto;
  


  }

}
