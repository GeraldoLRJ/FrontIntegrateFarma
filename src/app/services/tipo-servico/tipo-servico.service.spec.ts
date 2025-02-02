import { TestBed } from '@angular/core/testing';

import { TipoServicoService } from './tipo-servico.service';

describe('TipoServicoService', () => {
  let service: TipoServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
