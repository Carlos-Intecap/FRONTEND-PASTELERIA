import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladminsucursalesComponent } from './roladminsucursales.component';

describe('RoladminsucursalesComponent', () => {
  let component: RoladminsucursalesComponent;
  let fixture: ComponentFixture<RoladminsucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladminsucursalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoladminsucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
