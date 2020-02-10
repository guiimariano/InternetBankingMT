import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, take } from 'rxjs/operators';

import { Extrato } from '../shared/interfaces/extrato.interface';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: Extrato[];

  constructor(
    private extratoService: ExtratoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.extratoService.getExtrato()
      .pipe(
        delay(1000),
        take(1),
      )
      .subscribe(response => {
        this.extrato = response;
      });
  }
}
