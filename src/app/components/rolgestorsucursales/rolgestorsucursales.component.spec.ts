import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolgestorsucursalesComponent } from './rolgestorsucursales.component';

describe('RolgestorsucursalesComponent', () => {
  let component: RolgestorsucursalesComponent;
  let fixture: ComponentFixture<RolgestorsucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolgestorsucursalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolgestorsucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
