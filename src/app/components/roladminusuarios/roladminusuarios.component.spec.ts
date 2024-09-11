import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladminusuariosComponent } from './roladminusuarios.component';

describe('RoladminusuariosComponent', () => {
  let component: RoladminusuariosComponent;
  let fixture: ComponentFixture<RoladminusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladminusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoladminusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
