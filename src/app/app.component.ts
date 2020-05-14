import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _tranlsateService: TranslateService) {}

  ngOnInit() {
    this.getLanguage();
  }

  getLanguage() {
    const selectedLanguage =
      localStorage.getItem('selectedLanguage') ||
      this._tranlsateService.getBrowserLang();
    this._tranlsateService.use(selectedLanguage);
  }
}
