import { ProdutoServicoService } from './servico/produto-servico.service';
import { Produto } from './servico/produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  

  listaProduto: Produto[] = [];

  curso: Produto = new Produto
  
  nome: string= '';

  selecionado: Produto;

  constructor(
    private router: Router,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    
    this.produtoServicoService.pesquisar(this.nome).subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
        console.log(this.listaProduto);
      }
    );

  }

  incluir(){

    this.router.navigate(['produto/incluir']);
    
  }

  selecionar(produto){
    this.selecionado = produto;
  }

  alterar(){
    this.router.navigate(['/produto/alterar/' + this.selecionado.nome]);
  }

  excluir(){
    this.produtoServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    )
  

    }

}
