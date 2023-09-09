import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerdetailsComponent } from './towerdetails.component';

describe('TowerdetailsComponent', () => {
  let component: TowerdetailsComponent;
  let fixture: ComponentFixture<TowerdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowerdetailsComponent]
    });
    fixture = TestBed.createComponent(TowerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
