import { Component, OnInit } from "@angular/core";
import { BitcoinService } from "../bitcoin.service";
import { TimerService } from "../timer.service";

@Component({
  selector: "app-bitcoin",
  templateUrl: "./bitcoin.component.html",
  styleUrls: ["./bitcoin.component.css"]
})
export class BitcoinComponent implements OnInit {
  constructor(public bitcoinService: BitcoinService) {
    this.bitcoinService.update();
  }

  ngOnInit() {}
}
