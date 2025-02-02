import { TestBed } from '@angular/core/testing';

import { PrestadorServicoService } from './prestador-servico.service';

describe('PrestadorServicoService', () => {
  let service: PrestadorServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestadorServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
