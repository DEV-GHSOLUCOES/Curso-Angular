import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeirocomponenteComponent } from './primeirocomponente.component';

describe('PrimeirocomponenteComponent', () => {
  let component: PrimeirocomponenteComponent;
  let fixture: ComponentFixture<PrimeirocomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeirocomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeirocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
