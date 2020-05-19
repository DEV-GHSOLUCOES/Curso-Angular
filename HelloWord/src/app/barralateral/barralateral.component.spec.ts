import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarralateralComponent } from './barralateral.component';

describe('BarralateralComponent', () => {
  let component: BarralateralComponent;
  let fixture: ComponentFixture<BarralateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarralateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarralateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
