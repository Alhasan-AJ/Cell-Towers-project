import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerschartComponent } from './towerschart.component';

describe('TowerschartComponent', () => {
  let component: TowerschartComponent;
  let fixture: ComponentFixture<TowerschartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowerschartComponent]
    });
    fixture = TestBed.createComponent(TowerschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
