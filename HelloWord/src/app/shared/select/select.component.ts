import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input('nome') nome: string = '';
  @Input('opcoes') opcoes: any[] = [];
  @Input('valorInicial') valorInicial: any;
  @Output('valorRetorno') valorRetorno: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  retornarValor(){
    this.valorRetorno.emit(this.valorInicial);
  }

}
