import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSaldoComponent } from './card-saldo.component';

describe('CardSaldoComponent', () => {
  let component: CardSaldoComponent;
  let fixture: ComponentFixture<CardSaldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSaldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
