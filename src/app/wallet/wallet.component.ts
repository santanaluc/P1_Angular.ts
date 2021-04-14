import { Component, OnInit } from "@angular/core";
import { BitcoinService } from "../bitcoin.service";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
  styleUrls: ["./wallet.component.css"]
})
export class WalletComponent implements OnInit {
  acao: number;
  qt: number;
  total: number;

  constructor(public bitcoin: BitcoinService) {}

  buy() {
    this.validator();

    this.qt = this.qt + this.acao;
    this.total = this.qt * this.bitcoin.currentResponse.bpi.BRL.rate_float;
  }

  sell() {
    this.validator();
    if (this.qt >= this.acao) {
      this.qt = this.qt - this.acao;
      this.total = this.qt * this.bitcoin.currentResponse.bpi.BRL.rate_float;
    }
  }

  validator() {
    if (this.qt == null) this.qt = 0;
    if (this.total == null) this.total = 0;
  }

  ngOnInit() {}
}
