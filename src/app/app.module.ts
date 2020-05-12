import { ProfileSettingsModule } from "./profile-settings/profile-settings.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProfileSettingsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
