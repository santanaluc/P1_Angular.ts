import { Component, OnInit } from "@angular/core";
import { BitcoinService } from "../bitcoin.service";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
  styleUrls: ["./wallet.component.css"]
})
export class WalletComponent implements OnInit {
  action: number;
  qt: number;
  total: number;

  constructor(public bitcoin: BitcoinService) {}

  ngOnInit() {}

  buy() {
    this.validator();

    this.qt = this.qt + this.action;
    this.total = this.qt * this.bitcoin.currentResponse.bpi.BRL.rate_float;
  }

  sell() {
    this.validator();

    if (this.qt >= this.action) {
      this.qt = this.qt - this.action;
      this.total = this.qt * this.bitcoin.currentResponse.bpi.BRL.rate_float;
    }
  }

  validator() {
    if (this.qt == null) {
      this.qt = 0;
    }
    if (this.total == null) {
      this.total = 0;
    }
  }
}
