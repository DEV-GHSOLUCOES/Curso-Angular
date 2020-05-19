import { AlunomanterComponent } from './alunomanter/alunomanter.component';
import { AlunoComponent } from './aluno/aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { CursomanterComponent } from './cursomanter/cursomanter.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'curso',
    component: CursoComponent,
    pathMatch: 'full'
  },

  {
    path: 'curso/incluir',
    component: CursomanterComponent,
    pathMatch: 'full'
  },


  {
    path: 'curso/alterar/:nome',
    component: CursomanterComponent,
    pathMatch: 'full'
  },

  {
    path: 'aluno',
    component: AlunoComponent,
    pathMatch: 'full'
  },

  {
    path: 'aluno/incluir',
    component: AlunomanterComponent,
    pathMatch: 'full'
  },


  {
    path: 'aluno/alterar/:nome',
    component: AlunomanterComponent,
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
