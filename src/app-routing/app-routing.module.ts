import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { FeaturesComponent } from '../app/features/features.component';
import { CurrenciesComponent } from 'src/app/currencies/currencies.component';
import { PageNotFoundComponent } from 'src/app/core/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },
  { path: 'curriences', component: CurrenciesComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
