import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'money-transfer';
  txnData: any[] = [];
  formattedTxnData: any = [];

  constructor(private httpClient: HttpClient, private translate: TranslateService) {
     translate.setDefaultLang('EN');
  }

  /**
   * on init call
   */
  ngOnInit() {
    this.httpClient.get('assets/transactions.json').subscribe((data: any)  => {
      this.txnData = data.data;
      this.txnData.forEach((element: any) => {
        const obj: any = {};
        obj.categoryCode = element.categoryCode;
        obj.date = new Date(element.dates.valueDate);
        obj.type = element.transaction.type;
        obj.beneficiary = element.merchant.name;
        obj.amount = element.transaction.amountCurrency.amount;
        obj.creditDebitIndicator = element.transaction.creditDebitIndicator;
        this.formattedTxnData.push(obj);
      });
    });
  }

  /**
   * selects language
   */
  langSelected(value: string) {
    this.translate.use(value);
}
}
