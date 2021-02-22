import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit {

  transferForm: FormGroup;
  @Input() txnData: any;
  initialBalance: any = 5824.76;
  amount: any = undefined;
  merchantName = 'Georgia Power Electric Company';
  confirmBtn = false;
  showError = false;
  overDraftError = false;

  constructor(private fb: FormBuilder, private modalService: NgbModal) { }

  /**
   * on init call
   */
  ngOnInit() {
    this.transferForm = this.fb.group({
      toAcc: [],
      fromAcc: [],
      amount: ['', [Validators.required, Validators.pattern('[0-9]')]]
   });
  }

  /**
   * makes money transfer
   */
  submit() {
    this.initialBalance = this.initialBalance - this.amount;
    const obj = {
      categoryCode: '#c12020',
      date: new Date(Date.now()),
      amount: this.amount,
      type: 'Online Transfer',
      creditDebitIndicator: 'DBIT',
      beneficiary: this.merchantName,
      newTxn : true
    };
    this.txnData.unshift(obj);
    this.cancel();
  }

  /**
   * gets from error
   */
  get formError() {
    return this.transferForm.controls;
  }

  /**
   * checks amount validity
   */
  checkAmount() {
      if (this.amount === '' || this.amount === 0 || this.amount <= 0) {
        this.showError = true;
      } else {
        this.showError = false;
      }
  }

  /**
   * checks overdraft account error
   */
  checkOverDraft() {
    if ((this.initialBalance - this.amount) < -500) {
      this.overDraftError = true;
    } else {
      this.overDraftError = false;
    }
  }

  /**
   * checks amount validity for only number
   */
  onlyNumber(e: any) {
    let input;
    if (e.metaKey || e.ctrlKey) {
       return true;
    }
    if (e.which === 32) {
       return false;
    }
    if (e.which === 0) {
       return true;
    }
    if (e.which < 33) {
       return true;
    }
    if (e.which === 46) {
      return true;
   }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }

  /**
   * cancel the transfer
   */
  cancel() {
    this.confirmBtn = false;
    this.amount = undefined;
  }
}
