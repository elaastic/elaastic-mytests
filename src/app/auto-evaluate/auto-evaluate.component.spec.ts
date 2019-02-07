import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoEvaluateComponent } from './auto-evaluate.component';

describe('AutoEvaluateComponent', () => {
  let component: AutoEvaluateComponent;
  let fixture: ComponentFixture<AutoEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoEvaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
