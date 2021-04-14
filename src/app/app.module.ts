import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BitcoinComponent } from "./bitcoin/bitcoin.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { WalletComponent } from "./wallet/wallet.component";
import { HomeComponent } from "./home/home.component";
import { TimerService } from "./timer.service";
import { BitcoinService } from "./bitcoin.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "wallet", component: WalletComponent },
      { path: "bitcoin", component: BitcoinComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BitcoinComponent,
    NavbarComponent,
    WalletComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, BitcoinService, HttpClient]
})
export class AppModule {}
