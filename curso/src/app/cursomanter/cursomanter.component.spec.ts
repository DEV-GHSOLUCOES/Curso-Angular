import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursomanterComponent } from './cursomanter.component';

describe('CursomanterComponent', () => {
  let component: CursomanterComponent;
  let fixture: ComponentFixture<CursomanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursomanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursomanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
