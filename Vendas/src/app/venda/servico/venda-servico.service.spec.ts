import { TestBed } from '@angular/core/testing';

import { VendaServicoService } from './venda-servico.service';

describe('VendaServicoService', () => {
  let service: VendaServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendaServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
