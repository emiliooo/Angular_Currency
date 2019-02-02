import { Component, OnInit, Input , AfterViewChecked } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.css']
})
export class CurrencyPlnComponent implements OnInit  {

  @Input() Curren: string;
  currency: [];

  constructor(private userservice: UserService) { }

  
  ngOnInit() {
    this.LoadCurency('BTCPLN');
  }


  LoadCurency(currenc) {
    this.userservice.getCurrency(currenc).subscribe(response => {
      this.currency = response['bids'][0];
    });
  }
}
