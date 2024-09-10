import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladminfinalsucursalesComponent } from './roladminfinalsucursales.component';

describe('RoladminfinalsucursalesComponent', () => {
  let component: RoladminfinalsucursalesComponent;
  let fixture: ComponentFixture<RoladminfinalsucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladminfinalsucursalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoladminfinalsucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
