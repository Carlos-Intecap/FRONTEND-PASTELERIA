import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarolclienteComponent } from './vistarolcliente.component';

describe('VistarolclienteComponent', () => {
  let component: VistarolclienteComponent;
  let fixture: ComponentFixture<VistarolclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistarolclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistarolclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
