import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowSliderComponent } from './below-slider.component';

describe('BelowSliderComponent', () => {
  let component: BelowSliderComponent;
  let fixture: ComponentFixture<BelowSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelowSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
