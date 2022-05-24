import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbooneesComponent } from './aboonees.component';

describe('AbooneesComponent', () => {
  let component: AbooneesComponent;
  let fixture: ComponentFixture<AbooneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbooneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbooneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
