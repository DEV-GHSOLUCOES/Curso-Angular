import { Curso } from './curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CursoServicoService {

  constructor( private httpClient: HttpClient) { }


  pesquisar(nome){
    return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/consultar/"+nome);

  }

  incluir(curso: Curso){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/incluir", curso);
  }

  alterar(curso: Curso){
    return this.httpClient.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/alterarparcial", curso);
  }

  remover(curso: Curso){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/remover", curso);
  }



}
