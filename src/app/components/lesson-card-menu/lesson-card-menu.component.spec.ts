import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCardMenuComponent } from './lesson-card-menu.component';

describe('LessonCardMenuComponent', () => {
  let component: LessonCardMenuComponent;
  let fixture: ComponentFixture<LessonCardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonCardMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonCardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
