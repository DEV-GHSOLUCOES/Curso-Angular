import { Component, OnInit } from '@angular/core';

import { Pessoa } from './servico/pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

titulo: string ='Cadastro Pessoa';

pessoa: Pessoa = new Pessoa();

listaPessoas:  Pessoa[] = [
  {codigo: '1', nome: 'Genival', telefone: '81 9999-8888', datanascimento: '01/01/2001',
   endereco: 'Rua do machado', bairro: 'Arruda', cidade: 'Recife', estado: 'PE'},

   {codigo: '2', nome: 'Glecio', telefone: '81 9999-8888', datanascimento: '01/01/2002',
   endereco: 'Recife Antigo', bairro: 'Arruda', cidade: 'Recife', estado: 'PE'}

];

listaEstado: any[] = [

  {codigo: "PE", nome: "Pernambuco"}, 
  {codigo: "AL", nome: "Alagoas"},
  {codigo: "MA", nome: "Maranhão"}



];



mostrarButtonSalvar: boolean = false ;

mostrarCadastroPessoa: boolean = false;


  constructor() { }

  ngOnInit(): void {



  }

  incluir(){


      this.listaPessoas.push(this.pessoa);
      this.pessoa = new Pessoa();



  }


  alterar(pessoa){
    this.pessoa = pessoa;
    console.log('Pessoa', this.pessoa);
    this.mostrarButtonSalvar = true;
    


    
  }

  salvarAlteracao(){
    this.pessoa = new Pessoa();
    this.mostrarButtonSalvar = false;
  }

  excluir(pessoa){
   this.listaPessoas = this.listaPessoas.filter(
      obj => obj !== pessoa
    );
  }


  imprimir(){
    alert( `${this.pessoa.codigo }
            ${this.pessoa.nome }
            ${this.pessoa.telefone }
            ${this.pessoa.datanascimento }
            ${this.pessoa.endereco }
            ${this.pessoa.bairro }
            ${this.pessoa.cidade }
            ${this.pessoa.estado }`);
  }


 cadastroPessoa(){

  this.mostrarCadastroPessoa = !this.mostrarCadastroPessoa;
  


  }

}
