import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladmincajerosComponent } from './roladmincajeros.component';

describe('RoladmincajerosComponent', () => {
  let component: RoladmincajerosComponent;
  let fixture: ComponentFixture<RoladmincajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladmincajerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoladmincajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
