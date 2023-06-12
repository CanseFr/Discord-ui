import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabComponent } from './user-tab.component';

describe('GenericTabComponent', () => {
  let component: UserTabComponent;
  let fixture: ComponentFixture<UserTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTabComponent]
    });
    fixture = TestBed.createComponent(UserTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
