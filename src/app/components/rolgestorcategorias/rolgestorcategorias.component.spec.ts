import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolgestorcategoriasComponent } from './rolgestorcategorias.component';

describe('RolgestorcategoriasComponent', () => {
  let component: RolgestorcategoriasComponent;
  let fixture: ComponentFixture<RolgestorcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolgestorcategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolgestorcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
