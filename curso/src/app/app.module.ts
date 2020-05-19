import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoComponent } from './curso/curso.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CursomanterComponent } from './cursomanter/cursomanter.component';
import { CursoServicoService } from './curso/servico/curso-servico.service';
import { AlunoServicoService } from './aluno/servico/aluno-servico.service';
import { AlunomanterComponent } from './alunomanter/alunomanter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    AlunoComponent,
    CursoComponent,
    MatriculaComponent,
    CursomanterComponent,
    AlunomanterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CursoServicoService,
    AlunoServicoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
