import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const translateServiceStub = {
       setDefaultLang(key: string): any {
        return of(key);
      }
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
        HttpClientTestingModule,
      ],
      providers: [
        { provide: TranslateService, useValue: translateServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('makes call to ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    fixture.whenStable().then(() => {
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });

  it('makes call to langSelected', () => {
    spyOn(component, 'langSelected').and.callThrough();
    fixture.whenStable().then(() => {
      component.langSelected('EN');
      expect(component.langSelected).toHaveBeenCalled();
    });
  });
});
