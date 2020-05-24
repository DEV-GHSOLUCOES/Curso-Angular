import { AlunoServicoService } from './../aluno/servico/aluno-servico.service';
import { MatriculaServicoService } from './servico/matricula-servico.service';
import { Component, OnInit } from '@angular/core';
import { Matricula } from './servico/matricula';
import { Router } from '@angular/router';

import { Aluno } from '../aluno/servico/aluno';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.scss']
})
export class MatriculaComponent implements OnInit {

  matricula: Matricula = new Matricula();
  selecionado: Matricula;

  listaMatricula: Matricula[] = [];

  listaAluno: Aluno[] = [];
  
  constructor(
    private router: Router,
    private matriculaServicoService: MatriculaServicoService,
    private alunoServicoService: AlunoServicoService

  ) { }

  ngOnInit(): void {

    this.alunoServicoService.pesquisar('').subscribe(
      data => {
        this.listaAluno = <Aluno[]>data;
      }
    );

    let codigoAluno = '';
    if(this.matricula.aluno != null){
      codigoAluno = this.matricula.aluno.codigo;
    }

    this.matriculaServicoService.consultar(codigoAluno).subscribe(
      data => {
        this.listaMatricula = <Matricula[]>data;
        
      }
    );
  }

  pesquisar(){
    
    let codigoAluno = '';
    if(this.matricula.aluno != null){
      codigoAluno = this.matricula.aluno.codigo;
    }

    this.matriculaServicoService.consultar(codigoAluno).subscribe(
      data => {
        this.listaMatricula = <Matricula[]>data;
        
      }
    );   
  }

  incluir(){    
    this.router.navigate(['/matricula/incluir']);
  }

  alterar(){    
    this.router.navigate(['/matricula/alterar/'+this.selecionado.aluno.codigo]);
  }

  remover(){

    this.matriculaServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor){
    this.selecionado = valor;    
  }

}
