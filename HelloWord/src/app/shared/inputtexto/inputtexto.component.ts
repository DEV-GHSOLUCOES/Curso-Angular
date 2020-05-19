import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputtexto',
  templateUrl: './inputtexto.component.html',
  styleUrls: ['./inputtexto.component.css']
})
export class InputtextoComponent implements OnInit {

  @Input('nome') nome: string = '';

  @Input('tipo') tipo: string = 'text';

  @Input('valorInicial') valorInicial: string = '';

  @Output('valorRetorno') valorRetorno: EventEmitter<string> = 
  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  retornarValor(){
    this.valorRetorno.emit(this.valorInicial);
  }

}
