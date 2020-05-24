import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculamanterComponent } from './matriculamanter.component';

describe('MatriculamanterComponent', () => {
  let component: MatriculamanterComponent;
  let fixture: ComponentFixture<MatriculamanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculamanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculamanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
