import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _tranlsateService: TranslateService) {
    const browserLanguage = this._tranlsateService.getBrowserLang();
    this._tranlsateService.use(browserLanguage);
  }
}
