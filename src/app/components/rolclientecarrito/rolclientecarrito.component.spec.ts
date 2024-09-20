import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolclientecarritoComponent } from './rolclientecarrito.component';

describe('RolclientecarritoComponent', () => {
  let component: RolclientecarritoComponent;
  let fixture: ComponentFixture<RolclientecarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolclientecarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolclientecarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
