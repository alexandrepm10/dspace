import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {BackofficeHomeComponent} from './home.component';

describe('HomeComponent', () => {
  let component: BackofficeHomeComponent;
  let fixture: ComponentFixture<BackofficeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BackofficeHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
