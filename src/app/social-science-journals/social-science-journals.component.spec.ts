import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SocialScienceJournalsComponent} from './social-science-journals.component';

describe('SocialScienceJournalsComponent', () => {
  let component: SocialScienceJournalsComponent;
  let fixture: ComponentFixture<SocialScienceJournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialScienceJournalsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialScienceJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
