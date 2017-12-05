import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from '../search/search.component';
import {CartComponent} from '../cart/cart.component';
import {LoginComponent} from '../login/login.component';
import {AuthGuard} from '../auth.guard';
import {RegisterComponent} from '../register/register.component';
import {EftComponent} from '../eft/eft.component';
import {UpdateuserComponent} from "../updateuser/updateuser.component";
import {ForgotpassComponent} from "../forgotpass/forgotpass.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
 // {path: 'search...', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'eft', component: EftComponent, canActivate: [AuthGuard]},
  {path: 'update', component: UpdateuserComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'forgotPass', component: ForgotpassComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
