import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHomepageComponent } from './homepage-homepage.component';

describe('HomepageHomepageComponent', () => {
  let component: HomepageHomepageComponent;
  let fixture: ComponentFixture<HomepageHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageHomepageComponent]
    });
    fixture = TestBed.createComponent(HomepageHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
