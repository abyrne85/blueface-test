import { Component, OnInit } from "@angular/core";
import { IProfile, ProfileSettingsService } from "./profile-settings.service";

@Component({
  selector: "app-profile-settings",
  templateUrl: "./profile-settings.component.html",
  styleUrls: ["./profile-settings.component.css"],
})
export class ProfileSettingsComponent implements OnInit {
  title: string = "Profile";
  laodingProfile: boolean = false;
  error: boolean = false;
  savingProfile: boolean = false;
  user: IProfile;
  errorMessage: string;
  constructor(private _profileSettingsService: ProfileSettingsService) {}

  ngOnInit() {
    this.fetchUser();
  }

  async fetchUser() {
    this.laodingProfile = true;
    try {
      this.user = await this._profileSettingsService.getProfileUser();
      this.laodingProfile = false;
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
