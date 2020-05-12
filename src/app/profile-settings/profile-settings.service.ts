import { Injectable } from "@angular/core";
import { MOCK_USER } from "src/mocks/mock-user";
export interface IProfile {
  firstName: string;
  lastName: string;
  username: string;
  age: number;
  email?: string;
}

const MOCK_TIMEOUT: number = 1000;
@Injectable({
  providedIn: "root",
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
          reject({ error: "Profile not found" });
        }
      }, Math.random() * MOCK_TIMEOUT);
    });
  }

  setName(user: IProfile): Promise<IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user.firstName = user.firstName;
          this.user.lastName = user.lastName;
          resolve(this.user);
        } else {
          reject({ message: "Invalid name" });
        }
      }, Math.random() * MOCK_TIMEOUT);
    });
  }

  setUserEmail(): Promise<IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user.email = `${this.user.firstName.trim()}.${this.user.lastName.trim()}@blueface.com`;
          resolve(this.user);
        } else {
          reject({ message: "Error on Email Generation" });
        }
      }, Math.random() * MOCK_TIMEOUT);
    });
  }
}
