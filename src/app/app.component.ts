import { LANGUAGES } from './constants/languages';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _translateService: TranslateService) {}

  languages = LANGUAGES;
  title = 'blueface-test';

  setLanguage(language) {
    this._translateService.use(language);
  }
}
