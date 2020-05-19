import { Aluno } from './aluno';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AlunoServicoService {

  constructor( private httpClient: HttpClient) { }

  
  pesquisar(nome){
    return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/aluno/consultar/"+nome);
    }

    incluir(aluno: Aluno){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/aluno/incluir", aluno);
    }

    alterar(aluno: Aluno){
    return this.httpClient.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/aluno/alterarparcial", aluno);
    }

    remover(aluno: Aluno){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/aluno/remover", aluno);
    }








}