import { Component, OnInit } from '@angular/core';
import { IProfile, ProfileSettingsService } from './profile-settings.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

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
  constructor(
    private _profileSettingsService: ProfileSettingsService,
    private _translateService: TranslateService
  ) {
    this._translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event);
    });
  }

  ngOnInit() {
    this._translateService.setDefaultLang('en');
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
    try {
      this.errorMessage = null;
      await this._profileSettingsService.setName(this.user);
      this.user = await this._profileSettingsService.setUserEmail();
      this.savingProfile = false;
    } catch (error) {
      this.savingProfile = false;
      this.errorMessage = error.message;
    }
  }
}
