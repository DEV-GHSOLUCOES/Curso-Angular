import { TestBed } from '@angular/core/testing';

import { MatriculaServicoService } from './matricula-servico.service';

describe('MatriculaServicoService', () => {
  let service: MatriculaServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculaServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
