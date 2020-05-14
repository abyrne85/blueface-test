import { TranslateService } from '@ngx-translate/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    const TranslateServiceStub = {
      currentLang: 'en',
      use() {
        return null;
      },
    };
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [FormsModule],
      providers: [
        { provide: TranslateService, useValue: TranslateServiceStub },
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the current language', () => {
    expect(component.currentLanguage).toBe('en');
  });

  it('should set the selected language to localstorage', () => {
    spyOn(Storage.prototype, 'setItem');
    component.setLanguage('fr');
    expect(component.currentLanguage).toBe('fr');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
