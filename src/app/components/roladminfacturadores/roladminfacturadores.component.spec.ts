import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladminfacturadoresComponent } from './roladminfacturadores.component';

describe('RoladminfacturadoresComponent', () => {
  let component: RoladminfacturadoresComponent;
  let fixture: ComponentFixture<RoladminfacturadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladminfacturadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoladminfacturadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
