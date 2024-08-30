import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarolfacturadorComponent } from './vistarolfacturador.component';

describe('VistarolfacturadorComponent', () => {
  let component: VistarolfacturadorComponent;
  let fixture: ComponentFixture<VistarolfacturadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistarolfacturadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistarolfacturadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
