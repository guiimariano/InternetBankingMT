import { TestBed, async, inject } from '@angular/core/testing';

import { NaoLogadoGuard } from './nao-logado.guard';

describe('NaoLogadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaoLogadoGuard]
    });
  });

  it('should ...', inject([NaoLogadoGuard], (guard: NaoLogadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
