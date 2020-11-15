import { TestBed } from '@angular/core/testing';

import { UserSettingsGuard } from './user-settings.guard';

describe('UserSettingsGuard', () => {
  let guard: UserSettingsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserSettingsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
