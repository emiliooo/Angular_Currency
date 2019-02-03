import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'src/app/core/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { LoginComponent } from 'src/app/core/login/login.component';
import { FeaturesComponent } from 'src/app/core/features/features.component';
import { CurrenciesComponent } from 'src/app/core/currencies/currencies.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },
  { path: 'curriences', component: CurrenciesComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
