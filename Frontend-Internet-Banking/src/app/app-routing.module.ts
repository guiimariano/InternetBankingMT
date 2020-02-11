import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogadoGuard } from './shared/guard/logado.guard';
import { NaoLogadoGuard } from './shared/guard/nao-logado.guard';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate: [NaoLogadoGuard],
}, {
  path: 'home',
  component: HomeComponent,
  canActivate: [LogadoGuard],
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'extrato',
  component: ExtratoComponent,
  canActivate: [LogadoGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
