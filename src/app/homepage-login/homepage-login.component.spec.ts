import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLoginComponent } from './homepage-login.component';

describe('HomepageLoginComponent', () => {
  let component: HomepageLoginComponent;
  let fixture: ComponentFixture<HomepageLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageLoginComponent]
    });
    fixture = TestBed.createComponent(HomepageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
