import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResearchCentersAndInstitutionsComponent} from './research-centers-and-institutions.component';

describe('ResearchCentersAndInstitutionsComponent', () => {
  let component: ResearchCentersAndInstitutionsComponent;
  let fixture: ComponentFixture<ResearchCentersAndInstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchCentersAndInstitutionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchCentersAndInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
