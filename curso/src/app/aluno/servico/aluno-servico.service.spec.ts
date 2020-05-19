import { AlunoServicoService } from './aluno-servico.service';
import { TestBed } from '@angular/core/testing';



describe('AlunoServicoService', () => {
  let service: AlunoServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
