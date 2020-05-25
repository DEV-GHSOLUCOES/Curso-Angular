import { Produto } from './../servico/produto';


import { ProdutoServicoService } from './../servico/produto-servico.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produtomanter',
  templateUrl: './produtomanter.component.html',
  styleUrls: ['./produtomanter.component.scss']
})
export class ProdutomanterComponent implements OnInit {

  produto: Produto = new Produto();

  operacao: string =  'Incluir';

  constructor(
    private produtoServicoService: ProdutoServicoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let nome: string = this.activatedRouter.snapshot.params.nome;
    if(nome != null){
      this.operacao = 'Alterar';
      this.produtoServicoService.pesquisar(nome).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
        }
      );
    }

  }

  incluir(){

    this.produtoServicoService.incluir(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);
        console.log(data);
      }
    );

  }

  alterar(){

    this.produtoServicoService.alterar(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);
        console.log(data);
      }
    );

  }

  voltar(){

    this.router.navigate(['/produto']);


  }

}