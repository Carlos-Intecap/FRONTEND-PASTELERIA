import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarolgestorComponent } from './vistarolgestor.component';

describe('VistarolgestorComponent', () => {
  let component: VistarolgestorComponent;
  let fixture: ComponentFixture<VistarolgestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistarolgestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistarolgestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
