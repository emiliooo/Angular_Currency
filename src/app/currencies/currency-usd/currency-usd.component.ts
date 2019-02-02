import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.css']
})
export class CurrencyUsdComponent implements OnInit {

  currency: [];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.LoadCurency('BTCUSD');
  }

  LoadCurency(currenc) {
    this.userservice.getCurrency(currenc).subscribe(response => {
      this.currency = response['bids'][0];
    });
  }

}
