import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      MDBBootstrapModule.forRoot(),
    ],
    declarations: [
        SidenavComponent
    ],
    exports: [
        SidenavComponent
    ],
    schemas: [
      NO_ERRORS_SCHEMA,
      CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: []
  })
  export class SidenavModule {

  }

