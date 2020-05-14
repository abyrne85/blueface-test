import { ProfileSettingsModule } from './profile-settings/profile-settings.module';
import { HeaderModule } from './header/header.module';

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {
  const TranslateServiceStub = {
    getBrowserLanguage() {
      return 'en';
    },
    use() {
      return null;
    },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HeaderModule, ProfileSettingsModule],
      providers: [
        { provide: TranslateService, useValue: TranslateServiceStub },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
