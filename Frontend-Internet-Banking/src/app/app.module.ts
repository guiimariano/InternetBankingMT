import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MzCardModule,
  MzInputModule,
  MzNavbarModule,
  MzRadioButtonModule,
  MzSelectModule,
  MzSpinnerModule,
} from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardSaldoComponent } from './shared/card-saldo/card-saldo.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    HomeComponent,
    NavbarComponent,
    TransferenciasComponent,
    CardSaldoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MzCardModule,
    MzSpinnerModule,
    MzSelectModule,
    MzInputModule,
    MzRadioButtonModule,
    HttpClientModule,
    HttpClientModule, 
    MzSpinnerModule, 
    MzNavbarModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
