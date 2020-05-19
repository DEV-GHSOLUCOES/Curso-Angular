
import { AlunoServicoService } from './../aluno/servico/aluno-servico.service';
import { Aluno } from './../aluno/servico/aluno';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunomanter',
  templateUrl: './alunomanter.component.html',
  styleUrls: ['./alunomanter.component.scss']
})
export class AlunomanterComponent implements OnInit {

  aluno: Aluno = new Aluno();

  operacao: string =  'Incluir';

  constructor(
    private alunoServicoService: AlunoServicoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let nome: string = this.activatedRouter.snapshot.params.nome;
    if(nome != null){
      this.operacao = 'Alterar';
      this.alunoServicoService.pesquisar(nome).subscribe(
        data => {
          this.aluno = (<Aluno[]>data)[0];
        }
      );
    }

  }

  incluir(){

    this.alunoServicoService.incluir(this.aluno).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/aluno']);
        console.log(data);
      }
    );

  }

  alterar(){

    this.alunoServicoService.alterar(this.aluno).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/aluno']);
        console.log(data);
      }
    );

  }

  voltar(){

    this.router.navigate(['/aluno']);


  }

}
