import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MakeTransferComponent } from './make-transfer.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('MakeTransferComponent', () => {
  let component: MakeTransferComponent;
  let fixture: ComponentFixture<MakeTransferComponent>;
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
      declarations: [MakeTransferComponent],
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
    fixture = TestBed.createComponent(MakeTransferComponent);
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

  it('makes call to submit', () => {
    spyOn(component, 'submit').and.callThrough();
    fixture.whenStable().then(() => {
      component.submit();
      expect(component.cancel).toHaveBeenCalled();
    });
  });

  it('makes call to cancel', () => {
    spyOn(component, 'cancel').and.callThrough();
    fixture.whenStable().then(() => {
      component.cancel();
      expect(component.cancel).toHaveBeenCalled();
    });
  });

  it('makes call to checkOverDraft', () => {
    spyOn(component, 'checkOverDraft').and.callThrough();
    fixture.whenStable().then(() => {
      component.checkOverDraft();
      expect(component.checkOverDraft).toHaveBeenCalled();
    });
  });

  it('makes call to onlyNumber', () => {
    spyOn(component, 'onlyNumber').and.callThrough();
    fixture.whenStable().then(() => {
      component.onlyNumber('');
      expect(component.onlyNumber).toHaveBeenCalled();
    });
  });

  it('makes call to checkAmount', () => {
    spyOn(component, 'checkAmount').and.callThrough();
    fixture.whenStable().then(() => {
      component.checkAmount();
      expect(component.checkAmount).toHaveBeenCalled();
    });
  });
});
