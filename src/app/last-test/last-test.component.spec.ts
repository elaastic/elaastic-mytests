import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTestComponent } from './last-test.component';

describe('LastTestComponent', () => {
  let component: LastTestComponent;
  let fixture: ComponentFixture<LastTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
