import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaroladminComponent } from './vistaroladmin.component';

describe('VistaroladminComponent', () => {
  let component: VistaroladminComponent;
  let fixture: ComponentFixture<VistaroladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaroladminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaroladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
