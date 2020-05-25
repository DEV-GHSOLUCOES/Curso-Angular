import { VendamanterComponent } from './venda/vendamanter/vendamanter.component';
import { VendaComponent } from './venda/venda.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { HomeComponent } from './home/home.component'
import { ClienteComponent } from './cliente/cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',    
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto',    
    component: ProdutoComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/incluir',
    component: ProdutomanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/alterar/:id', 
    component: ProdutomanterComponent,
    pathMatch: 'full'
  },

  {
    path: 'cliente',    
    component: ClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/incluir',
    component: ClientemanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/alterar/:id', 
    component: ClientemanterComponent,
    pathMatch: 'full'
  },

  {
    path: 'venda',    
    component: VendaComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda/incluir',
    component: VendamanterComponent,
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  