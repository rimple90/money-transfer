import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.scss']
})
export class ViewTransactionComponent implements OnInit {

  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  @Input() txnData: any;
  searchText = '';
  previous: string;
  toggleSort = [];
  showSortIcon = false;
  sortParams: string[] = ['i18n.TXN_SortByDate', 'i18n.TXN_SortByBeneficiary' , 'i18n.TRANSFER_Amount'];

  constructor(private translate: TranslateService) { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  /**
   * on init call
   */
  ngOnInit() {
    this.mdbTable.setDataSource(this.txnData);
    this.previous = this.mdbTable.getDataSource();
  }

  /**
   * search for data in transaction table
   */
  searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText || this.searchText === '') {
        this.mdbTable.setDataSource(this.previous);
        this.txnData = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
        this.txnData = this.mdbTable.searchLocalDataBy(this.searchText);
        this.mdbTable.setDataSource(prev);
    }
  }

  /**
   * clear search text
   */
  clearSearch() {
    this.searchText = '';
    this.txnData = this.mdbTable.getDataSource();
  }

  /**
   * sorts by field
   */
  sortByKey(key: any , sortFlag: boolean) {
    this.txnData.sort((a, b) => {
      if (key === this.sortParams[0]) {
        this.toggleSort[1] = undefined;
        this.toggleSort[2] = undefined;
        if (sortFlag) {
          if (a.date === b.date) {
            return b.beneficiary - a.beneficiary && b.amount - a.amount;
          }
          return a.date > b.date ? 1 : -1;
        } else {
          if (b.date === a.date) {
            return a.beneficiary - b.beneficiary && a.amount - b.amount;
          }
          return b.date > a.date ? 1 : -1;
        }
      }
      if (key === this.sortParams[1]) {
        this.toggleSort[0] = undefined;
        this.toggleSort[2] = undefined;
        if (sortFlag) {
          if (a.beneficiary === b.beneficiary) {
            return b.date - a.date && b.amount - a.amount;
          }
          return a.beneficiary > b.beneficiary ? 1 : -1;
        } else {
          if (b.beneficiary === a.beneficiary) {
            return a.date - b.date && a.amount - b.amount;
          }
          return b.beneficiary > a.beneficiary ? 1 : -1;
        }
      }
      if (key === this.sortParams[2]) {
        this.toggleSort[0] = undefined;
        this.toggleSort[1] = undefined;
        if (sortFlag) {
          if (a.amount === b.amount) {
            return b.date - a.date && b.beneficiary - a.beneficiary;
          }
          return a.amount > b.amount ? 1 : -1;
        } else {
          if (b.amount === a.amount) {
            return a.date - b.date && a.beneficiary - b.beneficiary;
          }
          return b.amount > a.amount ? 1 : -1;
        }
      }
    });
}

}
