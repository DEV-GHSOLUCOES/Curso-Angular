import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServicoService {

  constructor(private httpClient: HttpClient) { }


  pesquisar(nome ){

    return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/consultar"+nome);
  }

  incluir(produto: Produto){

    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/incluir", produto);

  }

  alterar(produto: Produto){

    return this.httpClient.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/alterarparcial", produto)

  }

  remover(produto: Produto){

    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/remover", produto)
  }





}
  