import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerstableComponent } from './towerstable.component';

describe('TowerstableComponent', () => {
  let component: TowerstableComponent;
  let fixture: ComponentFixture<TowerstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowerstableComponent]
    });
    fixture = TestBed.createComponent(TowerstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
