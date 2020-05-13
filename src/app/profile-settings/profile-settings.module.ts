import { UiElementsModule } from './../ui-elements/ui-elements.module';
import { ProfileSettingsService } from './profile-settings.service';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, UiElementsModule, TranslateModule],
  declarations: [ProfileSettingsComponent],
  exports: [ProfileSettingsComponent],
  providers: [ProfileSettingsService],
})
export class ProfileSettingsModule {}
