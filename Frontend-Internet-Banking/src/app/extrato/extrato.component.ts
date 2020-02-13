import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Extrato } from '../shared/interfaces/extrato.interface';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: Extrato[];
  extratoFiltrado: Extrato[];
  dataAtual: Date;
  dataInicial: Date;
  diasPadrao: number;
  mobile = false;

  constructor(
    private extratoService: ExtratoService
  ) { }

  ngOnInit() {

    if (window.screen.width <= 425) {
      this.mobile = true;
    }

    this.extratoService.getExtrato()
      .pipe(
        take(1),
      )
      .subscribe(response => {
        this.extrato = response;
      },
        (err) => console.log('Erro ao retornar o serviço de extrato', err),
        () => {
          this.dataAtual = new Date();
          this.dataInicial = new Date();
          this.diasPadrao = 7;
          this.calculoDatas(this.diasPadrao);
          this.filtroPorData(this.extrato, this.dataInicial, this.dataAtual);
          // this.extratoFiltrado = this.extrato.filter(this.filtroData);
        }
      );

  }

  calculoDatas(dias: number) {
    this.dataInicial = new Date();
    this.dataInicial.setDate(this.dataAtual.getDate() - (dias - 1));
    this.dataInicial.setHours(0, 0, 0, 0);
  }

  changeSuit(event) {
    this.calculoDatas(event.target.value);
    this.filtroPorData(this.extrato, this.dataInicial, this.dataAtual);
  }

  filtroPorData(extrato: Extrato[], dataInicial: Date, dataFinal: Date) {
    this.extratoFiltrado = [];
    extrato.forEach(transacao => {
      if (new Date(transacao.data) <= dataFinal && new Date(transacao.data) >= dataInicial) {
        this.extratoFiltrado.push(transacao);
      }
    });
    this.extratoFiltrado.sort(this.comparadorData);
  }

  comparadorData(primeiraData: Extrato, segundaData: Extrato) {
    if (primeiraData.data < segundaData.data) {
      return -1;
    }

    if (primeiraData.data > segundaData.data) {
      return 1;
    }

    return 0;
  }
}
