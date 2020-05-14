import { Component, OnInit } from '@angular/core';
import { IProfile, ProfileSettingsService } from './profile-settings.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  loadingProfile: boolean;
  savingProfile: boolean;
  error: boolean;
  user: IProfile;
  errorMessage: string;
  updateSuccesful: boolean;

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
    this.updateSuccesful = false;

    try {
      this.user = await this._profileSettingsService.setName(this.user);
      this.user = await this._profileSettingsService.setUserEmail(this.user);
      this.savingProfile = false;
      this.updateSuccesful = true;
    } catch (error) {
      this.savingProfile = false;
      this.errorMessage = error.message;
    }
  }
}
