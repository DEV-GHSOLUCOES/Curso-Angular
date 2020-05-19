import { AlunoServicoService } from './servico/aluno-servico.service';
import { Aluno } from './servico/aluno';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscriber } from 'rxjs';



@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {


  listaAlunos: Aluno[] = [];

  aluno: Aluno = new Aluno;
  
  nome: string= '';

  selecionado: Aluno;


  constructor(
    private router: Router,
    private alunoServicoService: AlunoServicoService
  ) { }

  ngOnInit(): void {
  }


  pesquisar(){
    
    this.alunoServicoService.pesquisar(this.nome).subscribe(
      data => {
        this.listaAlunos = <Aluno[]>data;
        console.log(this.listaAlunos);
      }
    );

  }

  incluir(){

    this.router.navigate(['aluno/incluir']);
    

  }

  selecionar(aluno){
    this.selecionado = aluno;
  }

  alterar(){
    this.router.navigate(['/aluno/alterar/' + this.selecionado.nome]);
  }

  excluir(){
    this.alunoServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    )
  }

}
