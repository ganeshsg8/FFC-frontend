import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAlertBarComponent } from './top-alert-bar.component';

describe('TopAlertBarComponent', () => {
  let component: TopAlertBarComponent;
  let fixture: ComponentFixture<TopAlertBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAlertBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAlertBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
