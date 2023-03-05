import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMiddleSectionComponent } from './top-middle-section.component';

describe('TopMiddleSectionComponent', () => {
  let component: TopMiddleSectionComponent;
  let fixture: ComponentFixture<TopMiddleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMiddleSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMiddleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
