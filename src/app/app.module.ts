import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CurrencyPlnComponent } from './currencies/currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currencies/currency-usd/currency-usd.component';
import { AuthGuard } from './guard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    FeaturesComponent,
    LoginComponent,
    PageNotFoundComponent,
    CurrencyPlnComponent,
    CurrencyUsdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
