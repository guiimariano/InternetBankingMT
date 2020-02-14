import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent implements OnInit {

  transferenciaForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    
  }
  get f() { return this.transferenciaForm.controls; }

  onSubmit = function (form) {
    console.log(form);

    const body = "instituicao=" + form.instituicao  
              + "&tipo_conta=" + form.tipo_conta 
              + "&agencia=" + form.agencia
              + "&conta=" + form.conta
              + "&favorecido" + form.favorecido
              + "&valor_transferencia" + form.valor_transferencia
              + "&tipo_transferencia" + form.tipo_transferencia;
    this.http.post("http://www.teste.com", body).subscribe((data) => {});

  }

}
