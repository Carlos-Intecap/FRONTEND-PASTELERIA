import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladmincateComponent } from './roladmincate.component';

describe('RoladmincateComponent', () => {
  let component: RoladmincateComponent;
  let fixture: ComponentFixture<RoladmincateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladmincateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoladmincateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
