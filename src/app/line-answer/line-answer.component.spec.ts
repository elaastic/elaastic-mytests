import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAnswerComponent } from './line-answer.component';

describe('LineAnswerComponent', () => {
  let component: LineAnswerComponent;
  let fixture: ComponentFixture<LineAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
