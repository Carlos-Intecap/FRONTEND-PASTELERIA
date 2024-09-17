import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolgestorproductosComponent } from './rolgestorproductos.component';

describe('RolgestorproductosComponent', () => {
  let component: RolgestorproductosComponent;
  let fixture: ComponentFixture<RolgestorproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolgestorproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolgestorproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
