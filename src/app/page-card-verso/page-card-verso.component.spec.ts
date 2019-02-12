import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardVersoComponent } from './page-card-verso.component';

describe('PageCardVersoComponent', () => {
  let component: PageCardVersoComponent;
  let fixture: ComponentFixture<PageCardVersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCardVersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCardVersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
