import { TestBed } from '@angular/core/testing';

import { ProfileSettingsService } from './profile-settings.service';
import { MOCK_USER } from 'src/mocks/mock-user';
const mockUser = MOCK_USER;

describe('ProfileSettingsService', () => {
  let service: ProfileSettingsService;
  beforeEach(() => {
    service = new ProfileSettingsService();
    service.user = mockUser;
  });

  it('should be created', () => {
    const service: ProfileSettingsService = TestBed.get(ProfileSettingsService);
    expect(service).toBeTruthy();
  });

  it('#getProfileUser should return a user', async () => {
    expect(service.user).toBeDefined();
  });
});
