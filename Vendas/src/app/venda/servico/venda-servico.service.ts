import { Venda } from './venda';
import { Cliente } from './../../cliente/servico/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendaServicoService {

  constructor(private httpClient: HttpClient) { }


    consultar(codigoCliente: string){

      return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar"+codigoCliente);
       

    }


    incluir(venda: Venda){

        return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir", venda);

    }

  
   remover(venda: Venda){

    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover", venda);

   }

      


}
 