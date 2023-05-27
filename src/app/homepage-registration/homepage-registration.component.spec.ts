import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageRegistrationComponent } from './homepage-registration.component';

describe('HomepageRegistrationComponent', () => {
  let component: HomepageRegistrationComponent;
  let fixture: ComponentFixture<HomepageRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageRegistrationComponent]
    });
    fixture = TestBed.createComponent(HomepageRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
