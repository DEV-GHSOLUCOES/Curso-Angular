import { CursoServicoService } from './../curso/servico/curso-servico.service';
import { Curso } from '../curso/servico/curso';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cursomanter',
  templateUrl: './cursomanter.component.html',
  styleUrls: ['./cursomanter.component.scss']
})
export class CursomanterComponent implements OnInit {

  curso: Curso = new Curso();

  operacao: string =  'Incluir';

  constructor(
    private cursoServicoService: CursoServicoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let nome: string = this.activatedRouter.snapshot.params.nome;
    if(nome != null){
      this.operacao = 'Alterar';
      this.cursoServicoService.pesquisar(nome).subscribe(
        data => {
          this.curso = (<Curso[]>data)[0];
        }
      );
    }

  }

  incluir(){

    this.cursoServicoService.incluir(this.curso).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/curso']);
        console.log(data);
      }
    );

  }

  alterar(){

    this.cursoServicoService.alterar(this.curso).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/curso']);
        console.log(data);
      }
    );

  }

  voltar(){

    this.router.navigate(['/curso']);


  }

}
