import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimeirocomponenteComponent } from './primeirocomponente/primeirocomponente.component';
import { LayoutComponent } from './layout/layout.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { CorpoComponent } from './corpo/corpo.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContaComponent } from './conta/conta.component';
import { InputtextoComponent } from './shared/inputtexto/inputtexto.component';
import { ButtonComponent } from './shared/button/button.component';
import { SelectComponent } from './shared/select/select.component';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeirocomponenteComponent,
    LayoutComponent,
    CabecalhoComponent,
    BarralateralComponent,
    CorpoComponent,
    PessoaComponent,
    RodapeComponent,
    ContaComponent,
    InputtextoComponent,
    ButtonComponent,
    SelectComponent,
    ProdutoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
