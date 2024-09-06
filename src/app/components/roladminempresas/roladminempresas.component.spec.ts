import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladminempresasComponent } from './roladminempresas.component';

describe('RoladminempresasComponent', () => {
  let component: RoladminempresasComponent;
  let fixture: ComponentFixture<RoladminempresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladminempresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoladminempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
