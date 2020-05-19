import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtextoComponent } from './inputtexto.component';

describe('InputtextoComponent', () => {
  let component: InputtextoComponent;
  let fixture: ComponentFixture<InputtextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputtextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputtextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
