import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladmingestoresComponent } from './roladmingestores.component';

describe('RoladmingestoresComponent', () => {
  let component: RoladmingestoresComponent;
  let fixture: ComponentFixture<RoladmingestoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladmingestoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoladmingestoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
