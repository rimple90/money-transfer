import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ViewTransactionComponent } from './view-transaction.component';

describe('MakeTransferComponent', () => {
  let component: ViewTransactionComponent;
  let fixture: ComponentFixture<ViewTransactionComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const translateServiceStub = {
        setDefaultLang(key: string): any {
         return of(key);
       }
     };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ViewTransactionComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: TranslateService, useValue: translateServiceStub },
        { provide: FormBuilder, useValue: formBuilderStub },
      ]
    });
    fixture = TestBed.createComponent(ViewTransactionComponent);
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

  it('makes call to searchItems', () => {
    spyOn(component, 'searchItems').and.callThrough();
    fixture.whenStable().then(() => {
      component.searchItems();
      expect(component.searchItems).toHaveBeenCalled();
    });
  });

  it('makes call to sortByKey', () => {
    spyOn(component, 'sortByKey').and.callThrough();
    fixture.whenStable().then(() => {
      component.sortByKey('date', true);
      expect(component.sortByKey).toHaveBeenCalled();
    });
  });

  it('makes call to clearSearch', () => {
    spyOn(component, 'clearSearch').and.callThrough();
    fixture.whenStable().then(() => {
      component.clearSearch();
      expect(component.clearSearch).toHaveBeenCalled();
    });
  });
});
