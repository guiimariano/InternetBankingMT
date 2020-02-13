import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent implements OnInit {

  mobile = false;
  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 425) {
      this.mobile = true;
    }
  }

}
