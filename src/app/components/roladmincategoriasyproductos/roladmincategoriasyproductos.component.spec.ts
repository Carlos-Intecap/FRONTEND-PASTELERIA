import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladmincategoriasyproductosComponent } from './roladmincategoriasyproductos.component';

describe('RoladmincategoriasyproductosComponent', () => {
  let component: RoladmincategoriasyproductosComponent;
  let fixture: ComponentFixture<RoladmincategoriasyproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladmincategoriasyproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoladmincategoriasyproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
