import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { FeaturesComponent } from './core/features/features.component';
import { CurrenciesComponent } from './core/currencies/currencies.component';
import { LoginComponent } from './core/login/login.component';
import { CurrencyPlnComponent } from './core/currencies/currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './core/currencies/currency-usd/currency-usd.component';


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
