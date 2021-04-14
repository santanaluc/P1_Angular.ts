import { Component, OnInit } from "@angular/core";
import { BitcoinService } from "../bitcoin.service";
import { TimerService } from "../timer.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public bitcoin: BitcoinService, public timer: TimerService) {
    this.timer.start();
  }

  status() {
    if (this.bitcoin.val !== null) {
      if (this.bitcoin.val) {
        return "Valor do bitcoin subiu :)";
      } else {
        return "Valor do bitcoin desceu :(";
      }
    }
  }

  ngOnInit() {}
}
