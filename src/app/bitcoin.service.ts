import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface Response {
  time: { updated: string };
  bpi: {
    BRL: {
      code: string;
      rate: string;
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  currentResponse: Response;
  updateList: Array<Response> = [];
  val: boolean = null;

  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
      .subscribe(data => {
        if (!this.currentResponse) {
          this.updateList.push(data);
        } else if (
          this.currentResponse.bpi.BRL.rate_float != data.bpi.BRL.rate_float
        ) {
          this.updateList.push(data);
          this.val = this.verify(data.bpi.BRL.rate_float);
        }
        this.currentResponse = data;
      });
  }

  verify(tax) {
    var old = this.currentResponse.bpi.BRL.rate_float;

    if (old == tax) {
      return null;
    } else if (old > tax) {
      return false;
    } else {
      return true;
    }
  }
}
