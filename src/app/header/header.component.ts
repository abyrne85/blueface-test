import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from '../constants/languages';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  languages = LANGUAGES;
  currentLanguage: string;

  constructor(private _translateService: TranslateService) {}

  ngOnInit() {
    this.currentLanguage = this._translateService.currentLang;
  }

  setLanguage(key) {
    this._translateService.use(key);
    this.currentLanguage = key;
    localStorage.setItem('selectedLanguage', key);
  }
}
