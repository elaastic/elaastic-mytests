import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifTestComponent } from './page-modif-test.component';

describe('PageModifTestComponent', () => {
  let component: PageModifTestComponent;
  let fixture: ComponentFixture<PageModifTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageModifTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModifTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
