import { ProfileSettingsService } from './profile-settings.service';
import { UiElementsModule } from './../ui-elements/ui-elements.module';
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

import { ProfileSettingsComponent } from './profile-settings.component';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MOCK_USER } from 'src/mocks/mock-user';

describe('ProfileSettingsComponent', () => {
  let component: ProfileSettingsComponent;
  let fixture: ComponentFixture<ProfileSettingsComponent>;
  let translate: TranslateService;
  let profileSettingsService: ProfileSettingsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSettingsComponent],
      imports: [
        UiElementsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        TranslateService,
        HttpClient,
        HttpHandler,
        ProfileSettingsService,
      ],
    }).compileComponents();
    translate = TestBed.get(TranslateService);
    profileSettingsService = TestBed.get(ProfileSettingsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user details and show loading message', fakeAsync(() => {
    fixture.detectChanges();
    expect(component.loadingProfile).toBe(true);
    spyOn(profileSettingsService, 'getProfileUser').and.returnValue(
      Promise.resolve(MOCK_USER)
    );
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component.user).toBeDefined();
    expect(component.loadingProfile).toBe(false);
  }));
});
