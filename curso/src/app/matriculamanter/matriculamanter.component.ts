import { MatriculaCurso } from './../matricula/servico/matriculacurso';
import { Matricula } from './../matricula/servico/matricula'
import { AlunoServicoService } from './../aluno/servico/aluno-servico.service';
import { CursoServicoService } from './../curso/servico/curso-servico.service';
import { MatriculaServicoService } from './../matricula/servico/matricula-servico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



 




import { Aluno } from 'src/app/aluno/servico/aluno';

import { Curso } from 'src/app/curso/servico/curso';


@Component({
  selector: 'app-matricula-manter',
  templateUrl: './matriculamanter.component.html',
  styleUrls: ['./matriculamanter.component.scss']
})
export class MatriculaManterComponent implements OnInit {

  operacao: string = 'Incluir';

  matricula: Matricula = new Matricula();

  matriculaCurso: MatriculaCurso = new MatriculaCurso();

  listaCurso: Curso[] = [];
  listaAluno: Aluno[] = [];

  constructor(    
    private router: Router,
    private matriculaServicoService: MatriculaServicoService,
    private cursoServicoService: CursoServicoService,
    private alunoServicoService: AlunoServicoService
  ) { }

  ngOnInit(): void { 
    
    this.alunoServicoService.pesquisar('').subscribe(
      data => {
        this.listaAluno = <Aluno[]>data;
      }
    );
    
    this.cursoServicoService.pesquisar('').subscribe(
      data => {
        this.listaCurso = <Curso[]>data;
      }
    );
  }

  voltar(){
    this.router.navigate(['/matricula']);
  }

  incluir(){
    this.matriculaServicoService.incluir(this.matricula).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/matricula']);        
      }
    );
  }
  
  adicionar(){

    this.matricula.listaMatriculaCurso.push(this.matriculaCurso);
    this.matriculaCurso = new MatriculaCurso();

  }

  removercurso(matriculaCurso){

    this.matricula.listaMatriculaCurso = this.matricula.listaMatriculaCurso.filter(obj => obj !== matriculaCurso);

  } 

}
