import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreationTestComponent } from './page-creation-test.component';

describe('PageCreationTestComponent', () => {
  let component: PageCreationTestComponent;
  let fixture: ComponentFixture<PageCreationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
