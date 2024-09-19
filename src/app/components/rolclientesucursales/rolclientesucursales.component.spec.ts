import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolclientesucursalesComponent } from './rolclientesucursales.component';

describe('RolclientesucursalesComponent', () => {
  let component: RolclientesucursalesComponent;
  let fixture: ComponentFixture<RolclientesucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolclientesucursalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolclientesucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
