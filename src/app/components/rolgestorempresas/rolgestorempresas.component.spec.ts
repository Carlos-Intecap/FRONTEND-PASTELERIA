import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolgestorempresasComponent } from './rolgestorempresas.component';

describe('RolgestorempresasComponent', () => {
  let component: RolgestorempresasComponent;
  let fixture: ComponentFixture<RolgestorempresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolgestorempresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolgestorempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
