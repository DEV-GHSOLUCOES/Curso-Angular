import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunomanterComponent } from './alunomanter.component';

describe('AlunomanterComponent', () => {
  let component: AlunomanterComponent;
  let fixture: ComponentFixture<AlunomanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunomanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunomanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
