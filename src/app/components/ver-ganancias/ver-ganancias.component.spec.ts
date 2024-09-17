import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGananciasComponent } from './ver-ganancias.component';

describe('VerGananciasComponent', () => {
  let component: VerGananciasComponent;
  let fixture: ComponentFixture<VerGananciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerGananciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerGananciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
