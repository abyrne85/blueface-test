import { Injectable } from '@angular/core';
import { MOCK_USER } from 'src/mocks/mock-user';
export interface IProfile {
  firstName: string;
  lastName: string;
  username: string;
  age: number;
  email?: string;
}

const MOCK_TIMEOUT: number = 1000;
@Injectable({
  providedIn: 'root',
})
export class ProfileSettingsService {
  user: IProfile;
  constructor() {}

  getProfileUser(): Promise<IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user = MOCK_USER;
          resolve(this.user);
        } else {
          reject({ error: 'PROFILE.ERROR_MESSAGES.PROFILE_NOT_FOUND' });
        }
      }, Math.random() * MOCK_TIMEOUT);
    });
  }

  setName(user: IProfile): Promise<IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user.firstName = this.trimAndLower(user.firstName);
          this.user.lastName = this.trimAndLower(user.lastName);
          this.user.username = `${this.user.firstName}.${this.user.lastName}`;
          resolve(this.user);
        } else {
          reject({ message: 'PROFILE.ERROR_MESSAGES.INVALID_NAME' });
        }
      }, Math.random() * MOCK_TIMEOUT);
    });
  }

  setUserEmail(): Promise<IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user.email = `${this.user.firstName}.${this.user.lastName}@blueface.com`;
          resolve(this.user);
        } else {
          reject({ message: 'PROFILE.ERROR_MESSAGES.EMAIL_ERROR' });
        }
      }, Math.random() * MOCK_TIMEOUT);
    });
  }

  private trimAndLower(text: string) {
    return text.trim().toLowerCase();
  }
}
