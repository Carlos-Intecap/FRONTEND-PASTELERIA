import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladminrepartidoresComponent } from './roladminrepartidores.component';

describe('RoladminrepartidoresComponent', () => {
  let component: RoladminrepartidoresComponent;
  let fixture: ComponentFixture<RoladminrepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladminrepartidoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoladminrepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
