import { Component, OnInit } from '@angular/core';
import { IProfile, ProfileSettingsService } from './profile-settings.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  loadingProfile: boolean = false;
  savingProfile: boolean = false;
  error: boolean = false;
  user: IProfile;
  errorMessage: string;
  setNameSuccess: boolean;

  constructor(private _profileSettingsService: ProfileSettingsService) {}

  ngOnInit() {
    this.fetchUser();
  }

  async fetchUser() {
    this.loadingProfile = true;
    try {
      this.user = await this._profileSettingsService.getProfileUser();
      this.loadingProfile = false;
    } catch (error) {
      this.fetchUser();
    }
  }

  async saveUser() {
    this.savingProfile = true;
    this.errorMessage = null;
    try {
      if (!this.setNameSuccess) {
        await this._profileSettingsService.setName(this.user);
        this.setNameSuccess = true;
      }
      this.user = await this._profileSettingsService.setUserEmail();
      this.savingProfile = false;
    } catch (error) {
      this.savingProfile = false;
      this.errorMessage = error.message;
    }
  }
}
