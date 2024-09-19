import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolclienteproductosComponent } from './rolclienteproductos.component';

describe('RolclienteproductosComponent', () => {
  let component: RolclienteproductosComponent;
  let fixture: ComponentFixture<RolclienteproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolclienteproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolclienteproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
