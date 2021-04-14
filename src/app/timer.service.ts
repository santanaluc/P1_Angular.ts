import { Injectable } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor(public bitcoinService: BitcoinService) {}

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.counter % 2 == 0) {
          this.bitcoinService.update();
        }
        this.counter++;
      }, 1000);
    }
  }

  getCount() {
    return this.counter;
  }
}
