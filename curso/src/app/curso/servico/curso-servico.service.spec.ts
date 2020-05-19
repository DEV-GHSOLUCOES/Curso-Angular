import { TestBed } from '@angular/core/testing';

import { CursoServicoService } from './curso-servico.service';

describe('CursoServicoService', () => {
  let service: CursoServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
