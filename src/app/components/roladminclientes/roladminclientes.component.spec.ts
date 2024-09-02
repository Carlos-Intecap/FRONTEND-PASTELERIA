import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladminclientesComponent } from './roladminclientes.component';

describe('RoladminclientesComponent', () => {
  let component: RoladminclientesComponent;
  let fixture: ComponentFixture<RoladminclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladminclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoladminclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
