import { TestBed } from '@angular/core/testing';

import { ClienteServicoService } from './cliente-servico.service';

describe('ClienteServicoService', () => {
  let service: ClienteServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
