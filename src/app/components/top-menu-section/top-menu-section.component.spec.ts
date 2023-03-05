import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuSectionComponent } from './top-menu-section.component';

describe('TopMenuSectionComponent', () => {
  let component: TopMenuSectionComponent;
  let fixture: ComponentFixture<TopMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMenuSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
