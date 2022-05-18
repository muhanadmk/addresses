import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsAddressComponent } from './resultats-address.component';

describe('ResultatsAddressComponent', () => {
  let component: ResultatsAddressComponent;
  let fixture: ComponentFixture<ResultatsAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatsAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
