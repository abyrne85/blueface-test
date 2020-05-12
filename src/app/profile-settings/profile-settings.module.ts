import { ProfileSettingsService } from "./profile-settings.service";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { ProfileSettingsComponent } from "./profile-settings.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ProfileSettingsComponent],
  exports: [ProfileSettingsComponent],
  providers: [ProfileSettingsService],
})
export class ProfileSettingsModule {}
