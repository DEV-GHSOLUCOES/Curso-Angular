import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoServicoService } from './servico/curso-servico.service';
import { Curso  } from './servico/curso';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  listaCurso: Curso[] = [];

  curso: Curso = new Curso
  
  nome: string= '';

  selecionado: Curso;

  constructor(
    private router: Router,
    private cursoServicoService: CursoServicoService
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    
    this.cursoServicoService.pesquisar(this.nome).subscribe(
      data => {
        this.listaCurso = <Curso[]>data;
        console.log(this.listaCurso);
      }
    );

  }

  incluir(){

    this.router.navigate(['curso/incluir']);
    //this.listaCurso.push(this.curso);
      //this.curso = new Curso();

  }

  selecionar(curso){
    this.selecionado = curso;
  }

  alterar(){
    this.router.navigate(['/curso/alterar/' + this.selecionado.nome]);
  }

  excluir(){
    this.cursoServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    )
  }

}
