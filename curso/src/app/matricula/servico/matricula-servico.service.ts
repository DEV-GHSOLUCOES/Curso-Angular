import { Matricula } from './matricula';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MatriculaServicoService {

  constructor(private httpClient: HttpClient) { }





    consultar(codigoAluno: string){
    return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/matricula/consultar/"+codigoAluno);
    }

    incluir(matricula: Matricula){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/matricula/incluir", matricula);
    }

    remover(matricula: Matricula){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/matricula/remover", matricula);
    }

}
