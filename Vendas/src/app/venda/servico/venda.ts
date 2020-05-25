
import { Cliente } from './../../cliente/servico/cliente';
import { VendaItem } from './vendaitem'
export class Venda{

    codigo: string;
    cliente: Cliente;
    listaVendaItem: VendaItem[] = []; 
}