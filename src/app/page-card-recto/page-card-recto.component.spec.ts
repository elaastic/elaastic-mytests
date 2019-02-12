import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardRectoComponent } from './page-card-recto.component';

describe('PageCardRectoComponent', () => {
  let component: PageCardRectoComponent;
  let fixture: ComponentFixture<PageCardRectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCardRectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCardRectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
