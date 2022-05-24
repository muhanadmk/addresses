import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAbooneeComponent } from './on-aboonee.component';

describe('OnAbooneeComponent', () => {
  let component: OnAbooneeComponent;
  let fixture: ComponentFixture<OnAbooneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnAbooneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnAbooneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
