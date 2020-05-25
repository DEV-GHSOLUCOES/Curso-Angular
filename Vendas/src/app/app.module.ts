import { VendaServicoService } from './venda/servico/venda-servico.service';
import { ProdutoServicoService } from './produto/servico/produto-servico.service';
import { ClienteServicoService } from './cliente/servico/cliente-servico.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { VendamanterComponent } from './venda/vendamanter/vendamanter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProdutoComponent,
    VendaComponent, 
    HomeComponent,
    LayoutComponent,
    ClientemanterComponent,
    ProdutomanterComponent,
    VendamanterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
     


  ],
  providers: [
    ClienteServicoService,
    ProdutoServicoService,
    VendaServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
