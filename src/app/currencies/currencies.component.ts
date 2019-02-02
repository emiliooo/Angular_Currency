import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currency: [];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.LoadCurency('BTCPLN');
  }

  LoadCurency(currency) {
    this.userservice.getCurrency(currency).subscribe(response => {
      this.currency = response['bids'][0];
    });
  }

}
